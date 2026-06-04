type Props = {
  currentStep: number;
};

const steps = [
  { id: 1, label: "Kişi Bilgileri" },
  { id: 2, label: "Adres Bilgileri" },
];

export default function OrderStepper({ currentStep }: Props) {
  return (
    <div className=" bg-white flex items-center gap-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
              ${
                currentStep >= step.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            {step.id}
          </div>

          <span
            className={`text-sm whitespace-nowrap ${
              currentStep === step.id
                ? "font-semibold text-blue-600"
                : "text-gray-500"
            }`}
          >
            {step.label}
          </span>

          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-gray-300 mx-2" />
          )}
        </div>
      ))}
    </div>
  );
}
