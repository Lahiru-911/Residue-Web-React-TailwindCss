import {Input} from "@nextui-org/react";



const ContactForm = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 md:flex-nowrap">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  )
}

export default ContactForm;
