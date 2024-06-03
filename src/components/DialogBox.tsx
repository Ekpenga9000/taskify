import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPlus } from "react-icons/fa6";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IDialogueBox {
  btnTitle?: String;
}

const DialogBox = (props: IDialogueBox) => {
  const { btnTitle } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <button className="login">
          <FaPlus />
          {btnTitle === "New Task" ? "New Task" : "New Project"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        {btnTitle === "New Task" ? <CreateTaskForm /> : <CreateProjectForm />}
      </DialogContent>
    </Dialog>
  );
};

const CreateProjectForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to create project
    toast({
      title: "Project Created!🎉",
      style: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>New Project</DialogTitle>
        <DialogDescription>
          Create new project. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor={"projectName"} className="">
              Name
            </Label>
            <Input id={"projectName"} placeholder="Project name" />
          </div>
          <div className="">
            <Label htmlFor={"projectDescription"} className="text-right">
              Description
            </Label>

            <Textarea
              id={"projectDescription"}
              placeholder="Description"
              className=""
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="login">
            Create
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

const CreateTaskForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to create project
    toast({
      title: "Task Added!🎉",
      style: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>New Task</DialogTitle>
        <DialogDescription>
          Add new Task. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="taskName" className="">
              Name
            </Label>
            <Input id="taskName" placeholder="Project name" />
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Project name" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">New Chrome App</SelectItem>
              <SelectItem value="dark">Project management study</SelectItem>
              <SelectItem value="system">System Design Project</SelectItem>
              <SelectItem value="light">New Chrome App</SelectItem>
              <SelectItem value="dark">Project management study</SelectItem>
              <SelectItem value="system">System Design Project</SelectItem>
              <SelectItem value="light">New Chrome App</SelectItem>
              <SelectItem value="dark">Project management study</SelectItem>
              <SelectItem value="system">System Design Project</SelectItem>
              <SelectItem value="light">New Chrome App</SelectItem>
              <SelectItem value="dark">Project management study</SelectItem>
              <SelectItem value="system">System Design Project</SelectItem>
            </SelectContent>
          </Select>

          <div className="">
            <Label htmlFor="taskDescription" className="">
              Description
            </Label>

            <Textarea
              id="taskDescription"
              placeholder="Description"
              className=""
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="login">
            Create
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default DialogBox;
