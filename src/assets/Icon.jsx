import { twMerge } from "tailwind-merge";

export const StartVideo = ({ onClick, play }) => (
  <span onClick={onClick} class={twMerge("w-14 start-video cursor-pointer inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80 ", play ? " flex  " : " hidden ")}>
    <svg
      class="w-10 h-10 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  </span>
);

export const PauseVideo = ({ onClick, play }) => (
  <span onClick={onClick} class={twMerge(" hidden w-14 pause-video cursor-pointer items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80", play ? " hidden" : " flex  ")}>
    <svg
      class="w-9 h-9 scale-150"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        fill="#F97316"
        stroke="white"
        class="fill-white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
    </svg>
  </span>
);

export const VolumeUp = ({ onClick, mute }) => (
  <span onClick={onClick} class={twMerge("cursor-pointer  items-center mt-6 text-base -ml-4 font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80", mute ? " hidden " : "flex")}>
    <svg
      class="w-9 h-9 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
      />
    </svg>
  </span>
);

export const VolumeDown = ({ onClick, mute }) => (
  <span onClick={onClick} class={twMerge("volume-down-icon  cursor-pointer inline-flex items-center mt-6 text-base -ml-4 font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80", mute ? " flex " : " hidden")}>
    <svg
      class="w-9 h-9 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
      />
    </svg>
  </span>
);




export const Twitter = () => (
  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
    ></path>
  </svg>
)


export const Facebook = () => (
  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
  </svg>
)


export const Instagram = () => (
  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
    <circle cx="16.806" cy="7.207" r="1.078"></circle>
    <path
      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
    ></path>
  </svg>
)




export const DesctopLogo = () => (
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.58 9.31" className=" w-52 mx-auto">
    <g id="Layer_1-2" data-name="Layer 1">
      <g>
        <path class="cls-1" d="m1.92,6.09l-1.19,3.22h-.73L3.42,0h.85l3.57,9.31h-.78l-1.21-3.22H1.92Zm3.69-.67c-1.04-2.77-1.57-4.1-1.76-4.72h-.01c-.23.71-.82,2.36-1.66,4.72h3.43Z" />
        <path class="cls-1" d="m20.21,5.03c0-1.82.01-3.57.05-4.5h-.04c-.37,1.25-2.26,5.84-3.45,8.78h-.7c-.89-2.28-2.85-7.39-3.27-8.8h-.03c.07,1.06.09,3.23.09,4.83v3.97h-.72V0h1.08c1.28,3.19,2.89,7.37,3.23,8.42h.03c.21-.68,2.08-5.32,3.38-8.42h1.06v9.31h-.72v-4.28Z" />
        <path class="cls-1" d="m28.34,9.31v-3.5c0-.08-.03-.17-.05-.21l-3.33-5.6h.84c.93,1.58,2.55,4.34,2.95,5.03.4-.69,2.04-3.42,3.03-5.03h.8l-3.47,5.66c-.03.05-.04.11-.04.2v3.46h-.73Z" />
        <path class="cls-1" d="m37.27,4.96v4.35h-.73V0h3.34c1.84,0,2.81.99,2.81,2.45,0,1.18-.7,1.96-1.74,2.18.96.23,1.6.85,1.6,2.43v.36c0,.65-.05,1.53.12,1.89h-.73c-.17-.4-.13-1.14-.13-1.94v-.24c0-1.53-.45-2.17-2.24-2.17h-2.29Zm0-.66h2.25c1.64,0,2.39-.61,2.39-1.84,0-1.14-.74-1.8-2.2-1.8h-2.45v3.63Z" />
        <path class="cls-1" d="m53.08,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
        <path class="cls-1" d="m58.03,0h.72v8.65h5l-.13.66h-5.59V0Z" />
        <path class="cls-1" d="m67.85,0h.72v8.65h5l-.13.66h-5.59V0Z" />
        <path class="cls-1" d="m83.13,4.74h-4.75v3.91h5.2l-.11.66h-5.81V0h5.71v.66h-4.99v3.41h4.75v.67Z" />
      </g>
    </g>
  </svg>
)