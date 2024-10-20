import { useState, useEffect } from "react";
import axios from "axios";
import { z } from "zod";
import { cn } from "@/lib/utils";
import fs from "fs";
import path from "path";
import { connect, useDispatch } from "react-redux";

import { getSession } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { analytics } from "@/lib/analytics";

// Components
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { MultiSelect } from "@/components/ui/multi-select";
import GithubLoginButton from "@/components/GitHubLogin";

// Actions
import { getProjects } from "@/redux/actions/dataActions";

import styles from "../../styles/contribute.module.scss";
import markDownStyles from "../../styles/markdown-styles.module.scss";
import { ChevronLeft, Loader } from "lucide-react";

const TechOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const projectSchema = z.object({
  type: z.enum(["video", "article"]),
  title: z.string().min(1).max(100),
  tech: z
    .array(TechOptionSchema)
    .min(1)
    .transform((options) => options.map((option) => option.value)),
  category: z.enum(["web-dev", "mob-dev", "game-dev", "ml-ai"]),
  datePublished: z.date(),
  projectURL: z.string().url(),
});

// Define the main form schema
const formSchema = z.object({
  projects: z.array(projectSchema).min(1),
});

const AddProject = ({ markdownContent, projects }) => {
  const dispatch = useDispatch();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  const isLoggedIn = session?.user;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projects: [
        {
          type: "article",
          title: "",
          category: "web-dev",
          tech: [],
          datePublished: new Date(),
          projectURL: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  const handleSubmit = async (values) => {
    analytics.track("User submitted Project", {
      user: session.user,
    });
    try {
      setLoading(true);
      const response = await axios.post("/api/github/add-project", {
        projects: values.projects,
      });

      if (response.status === 200) {
        setLoading(false);
        analytics.track("Submit Project: Successful", {});
        alert("Project added successfully!");
        window.open(
          "https://github.com/Xtremilicious/projectlearn-project-based-learning/pulls",
          "_blank"
        );
      } else {
        setLoading(false);
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        "Failed to add project:",
        error.response ? error.response.data : error.message
      );
      analytics.track("Submit Project: Failed", { error });
      alert("Failed to add project");
    }
  };

  const { getValues } = form;

  if (!projects) {
    return null;
  }

  const techOptions = [...new Set(projects.flatMap((project) => project.tech))];

  return (
    <div className={styles.mainLayout}>
      <a className={styles.goBack} href="/">
        <ChevronLeft /> Go Back
      </a>
      <div className={styles.formBody}>
        <div className={styles.userInfo}>
          <GithubLoginButton />
        </div>
        <div
          className={cn(styles.formContents, {
            "opacity-50 pointer-events-none": !isLoggedIn,
          })}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="alwaysShowFirst"
                className="muted"
              >
                {fields.map((field, index) => (
                  <AccordionItem
                    key={field.id}
                    value={
                      fields.length === 1
                        ? "alwaysShowFirst"
                        : `project-${index}`
                    }
                  >
                    <AccordionTrigger>
                      {getValues(`projects.${index}.title`) ||
                        `Project ${index + 1}`}
                    </AccordionTrigger>
                    <AccordionContent>
                      {/* Type field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Type</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="video">Video</SelectItem>
                                  <SelectItem value="article">
                                    Article
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Title field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.title`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Project title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Date Published field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.datePublished`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Date Published</FormLabel>
                            <FormControl>
                              <DatePicker
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Category field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.category`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="web-dev">
                                    Web Development
                                  </SelectItem>
                                  <SelectItem value="mob-dev">
                                    Mobile Development
                                  </SelectItem>
                                  <SelectItem value="game-dev">
                                    Game Development
                                  </SelectItem>
                                  <SelectItem value="ml-ai">ML/AI</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Tech field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.tech`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Tech Stack</FormLabel>
                            <FormControl>
                              <MultiSelect
                                options={techOptions.map((option) => ({
                                  value: option,
                                  label: option,
                                }))}
                                selectedOptions={field.value || []} // Pass selected values
                                onSelect={field.onChange} // Update the field value
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Project URL field */}
                      <FormField
                        control={form.control}
                        name={`projects.${index}.projectURL`}
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Project URL</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://project-url.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end">
                        {/* Remove button (not shown for the last entry) */}
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => remove(index)}
                          >
                            Remove Project
                          </Button>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}

                <div
                  className={cn(
                    styles.formButtons,
                    "flex justify-between space-x-6 my-4"
                  )}
                >
                  {/* Button to add a new project */}
                  <Button
                    type="button"
                    disabled={loading}
                    variant="outline"
                    onClick={() => {
                      append({
                        type: "article",
                        title: "",
                        category: "web-dev",
                        tech: [],
                        datePublished: new Date(),
                        projectURL: "",
                      });
                    }}
                  >
                    Add Another Project
                  </Button>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center gap-2"
                  >
                    {loading && <Loader className="animate-spin" />}
                    Submit
                  </Button>
                </div>
              </Accordion>
            </form>
          </Form>
        </div>
      </div>
      <div className={markDownStyles.markdownBody}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

// Load markdown file and tech options during build
export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "CONTRIBUTE.md");
  const markdownContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      markdownContent,
    },
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.data.projects,
  };
};

export default connect(mapStateToProps, {})(AddProject);
