import * as React from "react";
export const UserAddIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={15.879}
      viewBox="0 0 21 15.879"
      {...props}
    >
      <path
        d="M-885.707-431.891v-2.049a3.306,3.306,0,0,0-.975-2.354,3.308,3.308,0,0,0-2.355-.975h-4.1a3.306,3.306,0,0,0-2.354.975,3.306,3.306,0,0,0-.975,2.354v2.049a.769.769,0,0,1-.768.769.769.769,0,0,1-.769-.769v-2.049a4.834,4.834,0,0,1,1.425-3.441,4.837,4.837,0,0,1,2.122-1.245,4.857,4.857,0,0,1-1.5-3.51A4.872,4.872,0,0,1-891.086-447a4.872,4.872,0,0,1,4.866,4.866,4.852,4.852,0,0,1-1.5,3.509,4.839,4.839,0,0,1,2.121,1.246,4.834,4.834,0,0,1,1.425,3.441v2.049a.769.769,0,0,1-.768.769A.769.769,0,0,1-885.707-431.891Zm-8.708-10.244a3.333,3.333,0,0,0,3.329,3.329,3.333,3.333,0,0,0,3.329-3.329,3.333,3.333,0,0,0-3.329-3.329A3.333,3.333,0,0,0-894.415-442.134Zm12.806,5.122v-2.3h-2.306a.768.768,0,0,1-.768-.768.768.768,0,0,1,.768-.768h2.306v-2.306a.768.768,0,0,1,.768-.768.768.768,0,0,1,.768.768v2.306h2.3a.768.768,0,0,1,.768.768.768.768,0,0,1-.768.768h-2.3v2.3a.768.768,0,0,1-.768.768A.768.768,0,0,1-881.609-437.012Z"
        transform="translate(898 447)"
        fill="currentColor"
      />
    </svg>
  );
};