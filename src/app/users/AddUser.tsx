import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { ChangeEvent, FormEvent, useState } from 'react';
interface FormDataTypes {
  name: string;
  email: string;
  password: string;
  role: string;
  image: null | File;
}
const UserFormDialog = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    email: '',
    password: '',
    role: '',
    image: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    console.log('Form submitted', formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Add New User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Enter name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })} required>
              <SelectTrigger id="role" name="role">
                Select Role
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
                {/* <SelectItem value="viewer">Viewer</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="image">Profile Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
        {/* <DialogClose>
          <Button variant="outline">Cancel</Button>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default UserFormDialog;
