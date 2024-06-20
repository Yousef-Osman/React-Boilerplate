import UserForm from "../components/UserForm";

const RegisterPage = () => {
  return (
    <div className="mt-5">
      <h3 className="text-primary">Create New User</h3>
      <div className='col-lg-4 col-md-6 col-10 mt-4 mb-5'>
        <UserForm />
      </div>
    </div>
  );
};

export default RegisterPage;