import React, { useEffect } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Spline from "@splinetool/react-spline";
import { toast, ToastContainer } from "react-toastify";
import step2 from "./step2/step2";
import step3 from "./step3/step3";
import step1 from "./step1/step1";
import { useNavigate,useParams } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const { link } = useParams();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const componentMap = {
    step2: step2,
    step3: step3,
  };
  const Component = componentMap[link] || step1;

  useEffect(() => {
    switch (activeStep) {
        case 1:
            navigate('/signup/step2')
            break;
        case 0:
            navigate('/signup/step1')
            break;
        case 2:
            navigate('/signup/step3')
            break;
    }
  }, [activeStep])
  
  return (
    <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
      <ToastContainer />
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section>
          <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
            <div className="container z-10">
              <div className="flex flex-wrap mt-0 -mx-3">
                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                  <div className="relative flex flex-col min-w-0  break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                    <Stepper
                      activeStep={activeStep}
                      isLastStep={(value) => setIsLastStep(value)}
                      isFirstStep={(value) => setIsFirstStep(value)}
                    >
                      <Step onClick={() => setActiveStep(0)}>
                        <CogIcon className="h-5 w-5" />
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 0 ? "blue" : "blue-gray"}
                          >
                            Security Details
                          </Typography>
                        </div>
                      </Step>
                      <Step onClick={() => setActiveStep(1)}>
                        <UserIcon className="h-5 w-5" />
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 1 ? "blue" : "blue-gray"}
                          >
                            Personal Details
                          </Typography>
                        </div>
                      </Step>
                      <Step onClick={() => setActiveStep(2)}>
                        <UserCircleIcon className="h-5 w-5" />
                        <div className="absolute -bottom-[4.5rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 2 ? "blue" : "blue-gray"}
                          >
                            Profile Picture
                          </Typography>
                        </div>
                      </Step>
                    </Stepper>
                    
                    <div className="mt-32 flex justify-between">
                      <Button onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                      </Button>
                      <Button onClick={handleNext} disabled={isLastStep}>
                        Next
                      </Button>
                    </div>
                    <Component />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                  <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                    <div className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10">
                      <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
