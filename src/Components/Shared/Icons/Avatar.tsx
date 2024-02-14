import * as React from "react";
export const AvatarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        d="M17.88,6.907a11,11,0,1,0,11,11,11,11,0,0,0-11-11Zm0,.957A10.042,10.042,0,0,1,25.048,24.94,10.735,10.735,0,0,0,22.2,23.653a7.682,7.682,0,0,1-1.3-.56,1.315,1.315,0,0,1-.591-.615c-.044-.548-.035-.99-.032-1.511.058-.058.132-.1.191-.168a4.571,4.571,0,0,0,.418-.59,4.232,4.232,0,0,0,.5-1.338c.145-.074.3-.09.418-.24a2.379,2.379,0,0,0,.43-1.212,1.364,1.364,0,0,0-.3-1.064,8.261,8.261,0,0,0,.39-2.968,3.5,3.5,0,0,0-.593-1.8,2.626,2.626,0,0,0-1.723-1,2.8,2.8,0,0,0-2.171-.808H17.83c-2.058.038-3.386.889-3.954,2.189a7,7,0,0,0-.036,4.374,1.358,1.358,0,0,0-.313,1.084,2.384,2.384,0,0,0,.43,1.212c.118.15.273.166.418.24a4.23,4.23,0,0,0,.5,1.337,4.561,4.561,0,0,0,.418.59c.059.07.133.111.191.169,0,.521.012.962-.032,1.511a1.321,1.321,0,0,1-.59.615,7.675,7.675,0,0,1-1.3.563,11.025,11.025,0,0,0-2.846,1.285A10.042,10.042,0,0,1,17.88,7.863Zm-.037,2.867c.882,0,1.437.262,1.589.529l.117.2.233.032a1.593,1.593,0,0,1,1.177.649,2.61,2.61,0,0,1,.415,1.318,8.169,8.169,0,0,1-.406,2.843l-.12.361.326.2a.488.488,0,0,1,.111.44,1.513,1.513,0,0,1-.233.735c-.073.093-.1.081-.1.08l-.394.033-.042.393a3.225,3.225,0,0,1-.448,1.168,3.707,3.707,0,0,1-.329.466c-.1.117-.205.19-.165.169l-.256.134v.29a18.389,18.389,0,0,0,.041,1.889l.006.064.022.06a2.272,2.272,0,0,0,1.023,1.128,8.245,8.245,0,0,0,1.471.642,11.961,11.961,0,0,1,2.444,1.054,10.044,10.044,0,0,1-12.891,0,12.372,12.372,0,0,1,2.447-1.054,8.232,8.232,0,0,0,1.468-.645,2.279,2.279,0,0,0,1.02-1.127l.022-.06.006-.064a18.54,18.54,0,0,0,.041-1.889v-.29l-.256-.135c.04.021-.066-.052-.165-.169a3.683,3.683,0,0,1-.329-.465,3.229,3.229,0,0,1-.448-1.168l-.042-.393-.394-.033c.007,0-.023.012-.1-.08a1.516,1.516,0,0,1-.233-.735.5.5,0,0,1,.111-.44l.3-.184-.089-.345a6.5,6.5,0,0,1-.05-3.992c.423-.966,1.27-1.58,3.09-1.614Z"
        transform="translate(-6.88 -6.907)"
        fill="currentColor"
      />
    </svg>
  );
};