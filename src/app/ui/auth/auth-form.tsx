import React, {useState} from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import { Input } from '@/components/ui/input';

//interface AuthFormProps {
    //isLogginOpen: boolean,
   // setIsLogginOpen: (value: boolean) => void,
//}
const AuthForm
    //:
    //React.FC<AuthFormProps>
 = (
    //{isLogginOpen, setIsLogginOpen}
) => {
    const [currentTab, setCurrentTab] = useState<'Login'| 'ForgotPassword'>('Login')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [forgetForgotPasswordSuccess, setForgetForgotPasswordSuccess] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)


    // @ts-ignore
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant='ghost'>Login Now</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] p-6'>
                <DialogHeader>
                    <DialogTitle className='text-center text-2xl font-bold mb-4'>
                        Welcome to Gupta Switchgears
                    </DialogTitle>
                    <Tabs
                    value={currentTab}
                    onValueChange={(value)=> setCurrentTab(value as 'Login'| 'ForgotPassword')}>
                        <TabsList className='grid w-full grid-cols-2 mb-6'>
                            <TabsTrigger value={'Login'} >
                                Login or SignUp
                            </TabsTrigger>
                            <TabsTrigger value={'ForgotPassword'} >
                                ForgotPassword
                            </TabsTrigger>

                        </TabsList>
                        <TabsContent value='Login' className='space-y-4'>
                            <form className='space-y-4'>
                            <div className='relative'>
                                <Input/>

                            </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default AuthForm
