import { useState } from "react";
import CompanyInput from "./CompanyInput";
import ProcessInput from "./ProcessInput";

function CompanyProcess() {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && <CompanyInput />}
      {step > 0 && <ProcessInput />}
    </div>
  );
}

export default CompanyProcess;
