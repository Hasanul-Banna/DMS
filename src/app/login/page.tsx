'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fireToast } from '@/utils/toastify';
import Cookies from 'js-cookie';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import logo from '../../assets/logo/DMS.png';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', username, password);
    if (username === 'admin' && password === 'admin') {
      Cookies.set('auth_token', 'Valid_token_given!', { expires: 7 });
      fireToast('info', 'Welcome Admin!');
      router.push('/documents');
    } else {
      fireToast('error', 'Invalid credentials! n\ try username : admin ;  password : admin');
      setUsername('');
      setPassword('');
    }

    // try {
    //   await login(username, password);
    //   router.push('/documents');
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md max-w-[500px]">
        <Image src={logo} width={180} height={180} alt="logo" className="m-auto" />
        <p className="text-center font-semibold">Welcome!</p>
        <h1 className="text-2xl font-bold mb-4">Document Management System</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
