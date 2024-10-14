"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type TechOption = Record<"value" | "label", string>;

interface FancyMultiSelectProps {
    options: TechOption[];
    selectedOptions: TechOption[];
    onSelect: (selected: TechOption[]) => void;
}

export function MultiSelect({ options, selectedOptions, onSelect }: FancyMultiSelectProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const handleSelect = (tech: TechOption) => {
        onSelect([...selectedOptions, tech]); // Update selected options
    };

    const handleUnselect = React.useCallback((tech: TechOption) => {
        onSelect(selectedOptions.filter((s) => s.value !== tech.value));
    }, [selectedOptions, onSelect]);

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = inputRef.current;

        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission if inside a form
            const newTech: TechOption = { value: inputValue.trim(), label: inputValue.trim() };
            
            if (inputValue.trim() && !selectedOptions.some(selected => selected.value === newTech.value)) {
                handleSelect(newTech); // Add new custom entry
                setInputValue(""); // Clear input after selection
            }
        }

        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "") {
                    handleUnselect(selectedOptions[selectedOptions.length - 1]); // Remove last selected item
                }
            }
            if (e.key === "Escape") {
                input.blur();
            }
        }
    }, [inputValue, selectedOptions]);

    // Handle adding new tech on blur
    const handleBlur = () => {
        const newTech: TechOption = { value: inputValue.trim(), label: inputValue.trim() };
        
        if (inputValue.trim() && !selectedOptions.some(selected => selected.value === newTech.value)) {
            handleSelect(newTech); // Add new custom entry
            setInputValue(""); // Clear input after selection
        }

        setOpen(false); // Close the options list on blur
    };

    const selectables = options.filter((option) =>
        !selectedOptions.some(selected => selected.value === option.value)
    );

    return (
        <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
            <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="flex flex-wrap gap-1">
                    {selectedOptions.map((tech) => (
                        <Badge key={tech.value} variant="secondary">
                            {tech.label}
                            <button
                                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleUnselect(tech);
                                    }
                                }}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                onClick={() => handleUnselect(tech)}
                            >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                            </button>
                        </Badge>
                    ))}
                    <CommandPrimitive.Input
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={setInputValue}
                        onBlur={handleBlur} // Handle blur event
                        onFocus={() => setOpen(true)}
                        placeholder="Select tech stack or add custom..."
                        className="ml-2 flex-1 max-w-[250px] bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                </div>
            </div>
            <div className="relative mt-2">
                <CommandList>
                    {open && selectables.length > 0 ? (
                        <div className="absolute top-0 z-10 w-full max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-full">
                                {selectables.map((tech) => (
                                    <CommandItem
                                        key={tech.value}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onSelect={() => handleSelect(tech)}
                                        className="cursor-pointer hover:bg-gray-200"
                                    >
                                        {tech.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </div>
                    ) : null}
                </CommandList>
            </div>
        </Command>
    );
}
