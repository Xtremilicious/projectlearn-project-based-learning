// pages/add-project.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


// Components
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

const AddProject = () => {
    const [project, setProject] = useState({
        id: '',
        type: '',
        title: '',
        category: '',
        tech: '',
        datePublished: '',
        projectURL: '',
    });
    const [accessToken, setAccessToken] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    useEffect(() => {
        // Fetch the access token from the serverless function
        const fetchAccessToken = async () => {
            try {
                const response = await axios.get('/api/store-access-token');
                setAccessToken(response.data.accessToken);
            } catch (error) {
                console.error('Failed to retrieve access token:', error);
                //alert('Please log in with GitHub first.');
            }
        };

        fetchAccessToken();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/github/add-project', {
                ...project,
                accessToken, // Pass the access token along with the project data
            });

            if (response.status === 200) {
                alert('Project added successfully!');
            } else {
                alert(`Error: ${response.data.error}`);
            }
        } catch (error) {
            console.error('Failed to add project:', error.response ? error.response.data : error.message);
            //alert('Failed to add project');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default AddProject;
