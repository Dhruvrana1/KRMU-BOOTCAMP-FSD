import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function StudentForm() {
  return (
    <form>
      <InputField label="Name" type="text" placeholder="Enter Name" />
      <InputField label="Email" type="email" placeholder="Enter Email" />
      <SubmitButton />
    </form>
  );
}
export default StudentForm;