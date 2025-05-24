'use client'

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../navbar/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
 

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch(() => {
               toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    } 

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title="Welcome to Airbnb"
                subtitle="Create an account!"
            />
            <Input 
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
             <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
             <Input 
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button 
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button 
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div
                className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
            >
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div>
                        Already have an account?
                    </div>
                    <div className="text-neutral-800 cursor-pointer hover:underline">
                        <span
                            onClick={registerModal.onClose}
                            className="
                                text-neutral-800
                                cursor-pointer
                                hover:underline
                            "
                        >
                            Log in
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;