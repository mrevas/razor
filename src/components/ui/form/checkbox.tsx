import React from 'react';
import { useTranslation } from 'next-i18next';
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | any;
}
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, ...rest }, ref) => {
    const { t } = useTranslation();
    return (
      <label className="group flex items-center flex-start gap-4 text-skin-base text-sm  cursor-pointer transition-all hover:text-skin-primary  py-2 last:border-b-0 last:pb-0 first:pt-0">
          <input
              type="checkbox"
              className="form-checkbox text-skin-yellow w-[20px] h-[20px] border-2 border-skin-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-skin-yellow focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-skin-yellow hover:checked:bg-skin-yellow"
              ref={ref}
              {...rest}
          />
        <span className="me-3.5 -mt-0.5">{label ? t(label) : label}</span>

      </label>
    );
  }
);

CheckBox.displayName = 'CheckBox';
