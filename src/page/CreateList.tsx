import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreate } from "@/store/mutation";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be greater than 2" })
    .max(100, { message: "name must be less than 100" }),
  phNumber: z.string().nonempty({ message: "Please enter your phone number." }),
  company: z.string().min(3).max(100),
  position: z.string().min(3).max(100),
  age: z.string().nonempty({ message: "Please enter your age." }),
});

const CreateList = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phNumber: "",
      company: "",
      position: "",
      age: "",
    },
  });

  // mutation
  const create = useCreate();

  function onSubmit(values: z.infer<typeof formSchema>) {
    create.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[500px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* phNumber */}
        <FormField
          control={form.control}
          name="phNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="position" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateList;
