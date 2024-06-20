import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    fullName: z
        .string()
        .min(3, { message: "Name must be at least 3 characters." }),
    email: z
        .string({ required_error: "Email is required." })
        .email(),
    age: z
        .number({ invalid_type_error: "Age is required." })
        .min(18, { message: "Age must be at least 18." }),
    password: z
        .string()
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password don't match",
    path: ["confirmPassword"], // path of error
});

type FormData = z.infer<typeof schema>;

const UserForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        if (isValid)
            console.table(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input id="fullName" type="text" className="form-control" {...register("fullName")} />
                {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input id="email" type="email" className="form-control" {...register("email")} />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="number" type="number" className="form-control" {...register("age", { valueAsNumber: true })} />
                {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" type="password" className="form-control" {...register("password")} />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input id="confirmPassword" type="password" className="form-control" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UserForm;