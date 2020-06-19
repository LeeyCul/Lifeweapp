/* tslint:disable */
/* eslint-disable */

import { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconNanhai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M777.659 965.502H246.365c-5.523 0-10-4.478-10-10 0-47.575 12.323-94.477 35.637-135.635 20.073-35.436 47.965-66.184 81.213-89.671-26.951-18.893-50.573-42.761-69.143-69.912a68.673 68.673 0 0 1-15.661 1.8c-37.868 0-68.676-30.808-68.676-68.676 0-7.175 1.094-14.19 3.259-20.935a7.795 7.795 0 0 1-0.048-0.208l-42-193.067a9.991 9.991 0 0 1-0.229-2.125c0-29.834 4.134-59.396 12.285-87.865 0.035-0.146 0.073-0.292 0.114-0.437 0.606-2.103 1.24-4.219 1.894-6.326 0.057-0.184 0.123-0.39 0.19-0.596l0.091-0.28a307.9 307.9 0 0 1 1.948-6.001c0.191-0.568 0.385-1.126 0.578-1.683l0.225-0.648a304.662 304.662 0 0 1 1.593-4.526 317.417 317.417 0 0 1 2.595-6.915l0.188-0.483c0.25-0.643 0.5-1.287 0.754-1.928 0.648-1.63 1.311-3.244 1.982-4.853l0.301-0.728c0.147-0.359 0.295-0.718 0.447-1.076a317.91 317.91 0 0 1 2.857-6.529c0.144-0.32 0.297-0.649 0.45-0.977l0.241-0.519a311.774 311.774 0 0 1 2.332-4.996c0.276-0.577 0.558-1.152 0.84-1.728l0.267-0.544a320.579 320.579 0 0 1 3.3-6.568c0.72-1.393 1.455-2.782 2.198-4.165l0.265-0.495c0.301-0.563 0.602-1.127 0.908-1.687 0.908-1.661 1.833-3.31 2.769-4.951l0.25-0.445c0.151-0.271 0.304-0.542 0.458-0.812a313.892 313.892 0 0 1 3.604-6.094c0.213-0.352 0.433-0.706 0.653-1.061l0.383-0.619c0.899-1.464 1.804-2.92 2.725-4.365 0.453-0.711 0.914-1.42 1.374-2.129a309.023 309.023 0 0 1 6.76-10.011l0.422-0.603c0.305-0.437 0.61-0.873 0.92-1.306a311.17 311.17 0 0 1 3.86-5.293l0.306-0.417a320.32 320.32 0 0 1 4.291-5.597c0.3-0.384 0.608-0.769 0.916-1.154l0.455-0.57a330.943 330.943 0 0 1 3.073-3.817c0.548-0.669 1.1-1.332 1.651-1.993 0.985-1.182 1.98-2.358 2.982-3.526 0.556-0.648 1.114-1.3 1.678-1.947 1.095-1.254 2.2-2.497 3.312-3.731l0.481-0.539c0.306-0.343 0.611-0.686 0.921-1.025a312.879 312.879 0 0 1 4.804-5.16l0.652-0.671a320.02 320.02 0 0 1 4.28-4.384c0.385-0.387 0.777-0.773 1.169-1.159l0.499-0.492a316.659 316.659 0 0 1 3.417-3.336 331.096 331.096 0 0 1 5.291-4.964l0.251-0.23c0.525-0.483 1.052-0.967 1.582-1.446a302.875 302.875 0 0 1 3.968-3.521l0.46-0.406c0.292-0.259 0.584-0.517 0.879-0.772a312.776 312.776 0 0 1 5.386-4.553c0.251-0.208 0.506-0.413 0.761-0.619l0.459-0.372a315.746 315.746 0 0 1 4.289-3.454c0.556-0.438 1.106-0.865 1.657-1.293l0.283-0.219a329.457 329.457 0 0 1 5.796-4.406 328.864 328.864 0 0 1 3.843-2.802l0.465-0.336c0.494-0.356 0.987-0.712 1.484-1.063a311.14 311.14 0 0 1 4.797-3.325l0.36-0.249c0.222-0.154 0.444-0.308 0.668-0.459a329.829 329.829 0 0 1 5.92-3.897c0.369-0.237 0.736-0.467 1.103-0.698l0.573-0.36a334.606 334.606 0 0 1 4.357-2.72c0.698-0.427 1.4-0.849 2.102-1.269a307.668 307.668 0 0 1 4.107-2.429 318.52 318.52 0 0 1 2.234-1.29 326.281 326.281 0 0 1 4.271-2.389l0.684-0.377c0.434-0.24 0.868-0.479 1.305-0.716a328.13 328.13 0 0 1 6.11-3.224l0.237-0.124a304.431 304.431 0 0 1 6.348-3.155c0.423-0.204 0.838-0.4 1.252-0.595l0.753-0.356c1.502-0.714 3-1.417 4.505-2.104 0.791-0.36 1.583-0.715 2.377-1.069a315.975 315.975 0 0 1 4.306-1.884l0.093-0.04c0.76-0.326 1.519-0.652 2.281-0.972a313.018 313.018 0 0 1 4.752-1.941l0.678-0.274c0.414-0.167 0.828-0.335 1.243-0.499a315.337 315.337 0 0 1 6.73-2.559l0.994-0.354c1.925-0.699 3.86-1.381 5.805-2.045 0.552-0.188 1.109-0.373 1.667-0.557l0.626-0.207a317.862 317.862 0 0 1 4.636-1.505 322.962 322.962 0 0 1 7.141-2.158l0.446-0.129c0.665-0.193 1.329-0.386 1.996-0.573 1.767-0.497 3.539-0.974 5.316-1.44l0.702-0.187c0.339-0.091 0.678-0.182 1.018-0.27a326.138 326.138 0 0 1 7.088-1.729c0.342-0.079 0.681-0.153 1.019-0.227l0.652-0.144c1.833-0.414 3.662-0.816 5.497-1.196 0.651-0.135 1.312-0.266 1.973-0.397l0.543-0.108a326.724 326.724 0 0 1 7.435-1.392c1.635-0.285 3.264-0.553 4.895-0.811l0.64-0.102c0.606-0.097 1.213-0.194 1.822-0.286a313.57 313.57 0 0 1 6.14-0.859l0.406-0.057c0.273-0.039 0.546-0.077 0.82-0.111 2.352-0.297 4.764-0.572 7.358-0.841 0.469-0.048 0.936-0.091 1.404-0.134l0.736-0.068c1.769-0.17 3.549-0.332 5.336-0.473 0.797-0.063 1.592-0.12 2.387-0.176l0.296-0.021c1.641-0.117 3.283-0.221 4.928-0.312a281.184 281.184 0 0 1 7.937-0.341l0.722-0.024c0.559-0.019 1.118-0.038 1.679-0.052 2.785-0.064 5.267-0.096 7.599-0.096h65.422c0.775 0 1.564 0.01 2.363 0.026 67.416 0.489 131.678 21.756 185.872 61.507 4.825 3.187 8.527 6.32 10.753 8.204 0.471 0.398 0.867 0.735 1.186 0.993a328.959 328.959 0 0 1 3.845 3.162l0.834 0.704a318.065 318.065 0 0 1 4.021 3.436l0.803 0.696c1.49 1.305 2.964 2.62 4.425 3.947l0.912 0.834a344.715 344.715 0 0 1 4.018 3.737l0.498 0.47a326.305 326.305 0 0 1 4.292 4.167l0.932 0.924a321.465 321.465 0 0 1 4.23 4.282l0.02 0.02a331.926 331.926 0 0 1 4.162 4.395l0.902 0.971a338.168 338.168 0 0 1 4.027 4.436l0.376 0.428a323.97 323.97 0 0 1 3.659 4.204l0.795 0.929a326.131 326.131 0 0 1 3.832 4.598l0.605 0.748a303.967 303.967 0 0 1 3.355 4.202l0.681 0.865a324.412 324.412 0 0 1 3.601 4.71l0.711 0.955a317.446 317.446 0 0 1 3.226 4.411l0.457 0.632a336.744 336.744 0 0 1 3.423 4.894l0.746 1.094a321.597 321.597 0 0 1 3.265 4.885l0.15 0.229a312.144 312.144 0 0 1 3.223 5.052l0.698 1.119a325.264 325.264 0 0 1 3.146 5.172l0.19 0.325a324.016 324.016 0 0 1 2.892 4.989l0.65 1.145c0.976 1.734 1.94 3.478 2.884 5.232l0.46 0.861a349.611 349.611 0 0 1 2.479 4.732l0.536 1.045c0.91 1.792 1.795 3.571 2.662 5.36l0.531 1.108a329.294 329.294 0 0 1 2.285 4.857l0.39 0.843a320.21 320.21 0 0 1 2.438 5.491l0.547 1.274a313.56 313.56 0 0 1 2.199 5.26l0.159 0.383a301.04 301.04 0 0 1 2.234 5.682l0.513 1.346a333.328 333.328 0 0 1 2.098 5.7l0.157 0.452c0.624 1.752 1.244 3.57 1.854 5.395l0.449 1.352c0.632 1.92 1.245 3.83 1.837 5.75l0.278 0.923a321.498 321.498 0 0 1 1.529 5.179l0.365 1.275a337.84 337.84 0 0 1 1.579 5.812l0.325 1.27c0.439 1.71 0.867 3.436 1.281 5.167l0.263 1.092c0.464 1.966 0.904 3.937 1.329 5.914l0.303 1.426c0.384 1.828 0.754 3.654 1.105 5.486l0.112 0.563c0.015 0.074 0.027 0.148 0.04 0.223 3.699 19.536 5.575 39.596 5.575 59.631 0 0.679-0.069 1.355-0.206 2.02l-40.635 197.021a68.771 68.771 0 0 1 2.204 17.295c0 37.868-30.809 68.676-68.678 68.676a68.175 68.175 0 0 1-20.414-3.097c-18.104 26.792-41.122 50.457-67.408 69.348 33.969 23.404 62.495 54.308 83.058 90.121 23.728 41.327 36.319 88.479 36.433 136.396a10 10 0 0 1 0.021 0.649c0.006 5.513-4.47 9.991-9.994 9.991z m-521.098-20h510.884c-1.609-41.191-13.138-81.476-33.583-117.086-21.442-37.348-52.225-68.941-89.018-91.366a10 10 0 0 1-0.159-16.979c31.437-19.976 58.565-47.167 78.455-78.635a9.997 9.997 0 0 1 12.612-3.751 48.285 48.285 0 0 0 20.219 4.4c26.841 0 48.678-21.836 48.678-48.676 0-4.78-0.694-9.51-2.063-14.056a9.995 9.995 0 0 1-0.219-4.903l40.917-198.389c-0.062-18.519-1.831-37.049-5.262-55.093l-0.027-0.15-0.082-0.414a298.663 298.663 0 0 0-1.031-5.113l-0.283-1.338a285.533 285.533 0 0 0-1.243-5.534l-0.249-1.031c-0.388-1.625-0.79-3.242-1.203-4.854l-0.304-1.185c-0.474-1.81-0.968-3.626-1.477-5.435l-0.345-1.202a293.587 293.587 0 0 0-1.428-4.833l-0.273-0.909a304.059 304.059 0 0 0-1.708-5.346l-0.421-1.265a280.155 280.155 0 0 0-1.752-5.098l-0.135-0.387a308.498 308.498 0 0 0-1.967-5.342l-0.475-1.247a294.582 294.582 0 0 0-2.077-5.286l-0.15-0.361a285.527 285.527 0 0 0-2.082-4.979l-0.511-1.189a305.08 305.08 0 0 0-2.277-5.13l-0.373-0.806a282.887 282.887 0 0 0-2.139-4.547l-0.497-1.037a303.631 303.631 0 0 0-2.49-5.015l-0.521-1.012a307.093 307.093 0 0 0-2.321-4.432l-0.407-0.765a294.383 294.383 0 0 0-2.716-4.926l-0.613-1.081a303.062 303.062 0 0 0-2.667-4.601l-0.139-0.237a312.488 312.488 0 0 0-3.015-4.962l-0.665-1.065a288.921 288.921 0 0 0-3.054-4.788l-0.073-0.11a304.737 304.737 0 0 0-3.093-4.629l-0.687-1.006a308.704 308.704 0 0 0-3.228-4.614l-0.43-0.596a287.048 287.048 0 0 0-3.007-4.11l-0.678-0.911a293.845 293.845 0 0 0-3.383-4.424l-0.638-0.811a280.755 280.755 0 0 0-3.136-3.927l-0.584-0.721a300.66 300.66 0 0 0-3.562-4.273l-0.753-0.878a297.006 297.006 0 0 0-3.445-3.959l-0.342-0.389a301.468 301.468 0 0 0-3.784-4.168l-0.838-0.902a302.58 302.58 0 0 0-3.888-4.106l-0.023-0.024a314.844 314.844 0 0 0-3.979-4.028l-0.866-0.858a307.926 307.926 0 0 0-4.033-3.916l-0.48-0.453a327.537 327.537 0 0 0-3.748-3.486l-0.872-0.797a300.934 300.934 0 0 0-4.139-3.691l-0.771-0.667a293.345 293.345 0 0 0-3.763-3.215l-0.775-0.654a293.637 293.637 0 0 0-3.599-2.96 99.002 99.002 0 0 1-1.53-1.277c-2.036-1.723-5.114-4.328-9.03-6.897a10.903 10.903 0 0 1-0.436-0.302C670.476 98.95 610.153 78.97 546.866 78.522l-0.129-0.001a99.44 99.44 0 0 0-2.026-0.023h-65.422c-2.176 0-4.506 0.029-7.123 0.09-0.483 0.012-0.977 0.029-1.471 0.046l-0.778 0.026c-1.634 0.05-3.255 0.108-4.872 0.185a309.047 309.047 0 0 0-7.2 0.427l-0.296 0.021c-0.745 0.053-1.491 0.106-2.234 0.165-1.668 0.132-3.334 0.283-4.997 0.443l-0.829 0.077c-0.391 0.036-0.781 0.071-1.171 0.111-2.441 0.252-4.706 0.511-6.923 0.791l-1.124 0.154c-1.929 0.251-3.847 0.519-5.757 0.806-0.546 0.082-1.093 0.169-1.64 0.257l-0.668 0.106a310.13 310.13 0 0 0-4.581 0.759 304.37 304.37 0 0 0-6.976 1.306l-0.555 0.11c-0.6 0.119-1.2 0.238-1.799 0.362-1.725 0.357-3.435 0.733-5.141 1.119l-1.577 0.35a301.75 301.75 0 0 0-6.629 1.618l-1.629 0.433c-1.649 0.433-3.308 0.878-4.96 1.343-0.614 0.173-1.227 0.351-1.84 0.529l-0.459 0.133a279.187 279.187 0 0 0-6.689 2.021c-1.45 0.458-2.898 0.929-4.343 1.41l-0.665 0.22c-0.492 0.162-0.983 0.324-1.471 0.491a297.06 297.06 0 0 0-5.448 1.919l-0.929 0.33a291.429 291.429 0 0 0-6.3 2.395c-0.345 0.136-0.696 0.278-1.048 0.42l-0.756 0.306a283.579 283.579 0 0 0-4.451 1.818c-0.712 0.299-1.42 0.603-2.129 0.907a292.52 292.52 0 0 0-4.134 1.809c-0.751 0.334-1.492 0.667-2.231 1.003-1.41 0.643-2.811 1.301-4.209 1.965l-0.822 0.389c-0.358 0.168-0.717 0.337-1.074 0.51a287.274 287.274 0 0 0-6.087 3.03c-1.87 0.959-3.742 1.948-5.794 3.057-0.377 0.204-0.761 0.417-1.145 0.628l-0.726 0.4a310.29 310.29 0 0 0-3.996 2.234c-0.699 0.399-1.399 0.805-2.097 1.21-1.27 0.737-2.529 1.483-3.784 2.237l-0.086 0.052c-0.648 0.389-1.297 0.777-1.941 1.171a311.027 311.027 0 0 0-4.098 2.559l-0.646 0.407c-0.308 0.193-0.616 0.386-0.922 0.583a305.983 305.983 0 0 0-5.544 3.649l-0.954 0.658a286.536 286.536 0 0 0-4.507 3.124c-0.451 0.319-0.892 0.637-1.333 0.956l-0.488 0.352a323.711 323.711 0 0 0-3.607 2.63 315.54 315.54 0 0 0-5.446 4.139l-0.294 0.228c-0.508 0.395-1.017 0.789-1.522 1.188a308.467 308.467 0 0 0-4.014 3.233l-1.144 0.928a299.6 299.6 0 0 0-5.054 4.272c-0.238 0.206-0.466 0.408-0.695 0.61l-0.553 0.488a285.581 285.581 0 0 0-3.721 3.302c-0.49 0.443-0.974 0.889-1.458 1.333l-0.261 0.24a295.395 295.395 0 0 0-4.968 4.66 285.907 285.907 0 0 0-3.2 3.125l-0.533 0.525c-0.343 0.338-0.688 0.677-1.028 1.019a295.066 295.066 0 0 0-4.026 4.125l-0.611 0.628a293.179 293.179 0 0 0-4.496 4.83c-0.261 0.287-0.517 0.573-0.772 0.859l-0.541 0.604a300.3 300.3 0 0 0-3.108 3.502c-0.524 0.601-1.045 1.209-1.566 1.817a311.17 311.17 0 0 0-4.346 5.177 296.556 296.556 0 0 0-2.882 3.581l-0.503 0.629c-0.261 0.326-0.522 0.652-0.78 0.982a301.618 301.618 0 0 0-4.032 5.259l-0.267 0.365a298.75 298.75 0 0 0-3.635 4.985c-0.275 0.385-0.539 0.762-0.803 1.14l-0.454 0.648a296.264 296.264 0 0 0-2.563 3.697 330.71 330.71 0 0 0-1.374 2.039 278.709 278.709 0 0 0-2.383 3.623c-0.455 0.7-0.882 1.356-1.303 2.018a298.963 298.963 0 0 0-2.55 4.086l-0.444 0.717c-0.177 0.285-0.354 0.569-0.528 0.856a308.748 308.748 0 0 0-3.381 5.718l-0.657 1.166a316.776 316.776 0 0 0-2.601 4.651c-0.274 0.502-0.544 1.007-0.813 1.513l-0.281 0.525a300.586 300.586 0 0 0-3.208 6.144 305.186 305.186 0 0 0-1.951 3.926l-0.277 0.565c-0.254 0.518-0.508 1.037-0.758 1.558a297.896 297.896 0 0 0-2.189 4.689l-0.299 0.646c-0.114 0.244-0.228 0.488-0.338 0.734a294.261 294.261 0 0 0-2.68 6.124c-0.12 0.285-0.241 0.578-0.361 0.871l-0.347 0.837a296.617 296.617 0 0 0-1.849 4.527c-0.233 0.588-0.465 1.187-0.698 1.785l-0.19 0.489a280.437 280.437 0 0 0-1.554 4.088 349.95 349.95 0 0 0-0.875 2.381 294.614 294.614 0 0 0-1.492 4.239l-0.238 0.688c-0.174 0.501-0.348 1.001-0.518 1.505a287.017 287.017 0 0 0-1.813 5.586l-0.264 0.821a304.11 304.11 0 0 0-1.676 5.584 11.7 11.7 0 0 1-0.117 0.446c-7.605 26.443-11.508 53.898-11.605 81.625l40.648 186.854a9.997 9.997 0 0 1 2.344 11.266 48.324 48.324 0 0 0-3.978 19.28c0 26.84 21.836 48.676 48.676 48.676 5.668 0 11.227-0.969 16.521-2.879a10.002 10.002 0 0 1 11.803 3.994c20.318 31.569 47.929 58.699 79.846 78.456a9.998 9.998 0 0 1 0.041 16.98c-36.094 22.582-66.253 54.08-87.217 91.089-19.978 35.277-31.251 75.106-32.841 115.783z"
        fill={getIconColor(color, 0, '#322B2C')}
      />
      <Path
        d="M847.846 319.1l-0.001-0.02c-0.034-0.18-0.073-0.358-0.107-0.538a311.524 311.524 0 0 0-1.07-5.309c-0.098-0.463-0.194-0.926-0.294-1.388-0.411-1.913-0.838-3.82-1.285-5.719-0.084-0.356-0.172-0.71-0.257-1.065-0.4-1.676-0.815-3.347-1.243-5.013-0.104-0.405-0.206-0.811-0.312-1.216a310.446 310.446 0 0 0-1.528-5.625c-0.117-0.415-0.237-0.827-0.355-1.241a312.328 312.328 0 0 0-1.477-5c-0.093-0.303-0.182-0.606-0.273-0.908a314.981 314.981 0 0 0-1.774-5.556l-0.439-1.32a286.993 286.993 0 0 0-1.812-5.271c-0.045-0.129-0.089-0.259-0.135-0.388a316.021 316.021 0 0 0-2.529-6.826 302.78 302.78 0 0 0-2.145-5.458l-0.175-0.419a285.054 285.054 0 0 0-2.132-5.097l-0.525-1.226a331.795 331.795 0 0 0-2.354-5.302c-0.127-0.277-0.257-0.552-0.384-0.829a311.74 311.74 0 0 0-2.217-4.713c-0.17-0.356-0.34-0.713-0.513-1.069a319.056 319.056 0 0 0-2.569-5.175c-0.175-0.342-0.353-0.683-0.526-1.024a313.935 313.935 0 0 0-2.412-4.604c-0.146-0.273-0.289-0.547-0.436-0.819a310.539 310.539 0 0 0-2.794-5.066c-0.209-0.371-0.42-0.74-0.629-1.11a303.502 303.502 0 0 0-2.76-4.76c-0.074-0.127-0.147-0.256-0.225-0.383a315.639 315.639 0 0 0-3.035-4.99c-0.229-0.37-0.461-0.74-0.692-1.109a301.661 301.661 0 0 0-3.152-4.942l-0.111-0.168a309.09 309.09 0 0 0-3.163-4.733c-0.24-0.353-0.479-0.705-0.721-1.056a312.448 312.448 0 0 0-3.32-4.747c-0.146-0.204-0.294-0.406-0.439-0.609a303.416 303.416 0 0 0-3.115-4.259c-0.233-0.312-0.464-0.626-0.698-0.938a296.952 296.952 0 0 0-3.496-4.573c-0.217-0.279-0.438-0.555-0.655-0.833a294.369 294.369 0 0 0-3.244-4.063l-0.588-0.726a319.64 319.64 0 0 0-3.693-4.431c-0.263-0.309-0.526-0.616-0.79-0.923a305.804 305.804 0 0 0-3.551-4.08c-0.12-0.136-0.238-0.273-0.358-0.408a317.63 317.63 0 0 0-4.775-5.238 311.836 311.836 0 0 0-4.034-4.26l-0.003-0.003a322.043 322.043 0 0 0-4.107-4.158c-0.303-0.301-0.604-0.603-0.909-0.902a321.96 321.96 0 0 0-4.151-4.03l-0.485-0.457a323.812 323.812 0 0 0-3.886-3.615l-0.895-0.818a316.282 316.282 0 0 0-4.283-3.82c-0.26-0.227-0.521-0.45-0.779-0.676a317.333 317.333 0 0 0-3.909-3.34c-0.265-0.223-0.527-0.447-0.793-0.669a304.704 304.704 0 0 0-3.727-3.065c-1.802-1.457-5.815-5.12-11.361-8.759C676.672 91.094 614.374 69 546.938 68.523c-0.753-0.015-1.496-0.025-2.227-0.025h-65.422c-2.458 0-4.909 0.036-7.354 0.093-0.78 0.019-1.558 0.049-2.337 0.074-1.678 0.052-3.354 0.112-5.025 0.191-0.892 0.042-1.78 0.09-2.668 0.14-1.592 0.088-3.182 0.189-4.768 0.302-0.869 0.062-1.738 0.123-2.605 0.191a302.89 302.89 0 0 0-5.173 0.459c-0.688 0.066-1.378 0.124-2.064 0.195-2.391 0.247-4.774 0.517-7.149 0.817-0.392 0.049-0.779 0.109-1.171 0.16-1.986 0.259-3.969 0.535-5.943 0.832-0.798 0.12-1.593 0.25-2.388 0.376-1.58 0.25-3.158 0.51-4.731 0.784a309.076 309.076 0 0 0-7.209 1.349c-0.814 0.162-1.629 0.321-2.441 0.49-1.775 0.368-3.545 0.757-5.31 1.156-0.542 0.123-1.086 0.236-1.626 0.361-2.295 0.532-4.58 1.09-6.854 1.672-0.56 0.144-1.115 0.299-1.675 0.445-1.72 0.451-3.436 0.912-5.145 1.393-0.793 0.223-1.583 0.454-2.373 0.683a296.902 296.902 0 0 0-11.405 3.547c-0.738 0.245-1.479 0.486-2.213 0.737a306.785 306.785 0 0 0-5.626 1.982c-0.32 0.116-0.644 0.225-0.963 0.342-2.183 0.8-4.351 1.627-6.509 2.474-0.625 0.246-1.245 0.502-1.869 0.752a307.611 307.611 0 0 0-4.6 1.879c-0.768 0.322-1.531 0.65-2.296 0.978a316.422 316.422 0 0 0-6.48 2.864 307.573 307.573 0 0 0-4.353 2.032c-0.648 0.309-1.302 0.612-1.95 0.925a301.683 301.683 0 0 0-6.188 3.076c-0.063 0.032-0.125 0.066-0.188 0.099a310.875 310.875 0 0 0-5.913 3.12c-0.646 0.35-1.286 0.708-1.931 1.062a303.21 303.21 0 0 0-4.135 2.312c-0.726 0.414-1.448 0.833-2.169 1.252a299.526 299.526 0 0 0-3.911 2.312c-0.7 0.42-1.401 0.84-2.097 1.266a312.018 312.018 0 0 0-4.233 2.643c-0.537 0.34-1.079 0.675-1.614 1.019a309.49 309.49 0 0 0-5.733 3.774c-0.335 0.226-0.665 0.46-0.999 0.688a299.954 299.954 0 0 0-4.648 3.222c-0.632 0.447-1.257 0.901-1.885 1.353a318.063 318.063 0 0 0-3.719 2.712 299.948 299.948 0 0 0-5.628 4.278c-0.625 0.485-1.25 0.968-1.871 1.458a311.473 311.473 0 0 0-4.155 3.346c-0.393 0.322-0.792 0.637-1.183 0.96a305.945 305.945 0 0 0-5.223 4.416c-0.436 0.376-0.863 0.761-1.296 1.14a295.555 295.555 0 0 0-3.84 3.408c-0.596 0.539-1.187 1.084-1.778 1.627a310.41 310.41 0 0 0-5.126 4.809 305.642 305.642 0 0 0-3.31 3.232c-0.538 0.532-1.08 1.061-1.614 1.598a309.306 309.306 0 0 0-4.158 4.259c-0.206 0.214-0.416 0.424-0.621 0.639a309.665 309.665 0 0 0-4.655 5.001c-0.457 0.501-0.905 1.01-1.358 1.514a314.466 314.466 0 0 0-3.207 3.614c-0.545 0.625-1.085 1.255-1.625 1.885a314.564 314.564 0 0 0-2.892 3.42c-0.534 0.64-1.067 1.281-1.595 1.925a311.096 311.096 0 0 0-2.981 3.702c-0.442 0.556-0.889 1.108-1.327 1.668a312.833 312.833 0 0 0-4.16 5.426c-0.099 0.132-0.194 0.267-0.292 0.399a304.716 304.716 0 0 0-3.745 5.135c-0.437 0.611-0.864 1.229-1.296 1.843a305.558 305.558 0 0 0-2.649 3.822c-0.477 0.7-0.949 1.403-1.42 2.107a291.387 291.387 0 0 0-2.466 3.747c-0.45 0.693-0.901 1.386-1.345 2.084a310.497 310.497 0 0 0-2.636 4.223c-0.334 0.544-0.676 1.084-1.007 1.631a310.92 310.92 0 0 0-3.49 5.902c-0.233 0.404-0.457 0.814-0.687 1.219a310.97 310.97 0 0 0-2.681 4.795c-0.384 0.702-0.759 1.41-1.137 2.116a297.449 297.449 0 0 0-5.325 10.396c-0.358 0.732-0.719 1.463-1.071 2.199a296.778 296.778 0 0 0-2.263 4.847c-0.22 0.48-0.447 0.955-0.664 1.437-0.944 2.093-1.865 4.2-2.764 6.318-0.247 0.582-0.482 1.169-0.726 1.752a309.468 309.468 0 0 0-1.917 4.693c-0.31 0.78-0.612 1.562-0.916 2.345a290.822 290.822 0 0 0-1.61 4.236c-0.304 0.817-0.605 1.635-0.902 2.456a295.722 295.722 0 0 0-1.545 4.389c-0.259 0.751-0.522 1.499-0.776 2.253a298.01 298.01 0 0 0-1.878 5.786c-0.091 0.292-0.19 0.58-0.28 0.872a310.323 310.323 0 0 0-1.825 6.095c-0.011 0.038-0.013 0.075-0.021 0.113-7.805 27.138-11.997 55.806-11.997 85.455l42 193.066 599.292 7.07 41.279-200.137a310.663 310.663 0 0 0-5.444-57.972z"
        fill={getIconColor(color, 1, '#322B2C')}
      />
      <Path
        d="M777.64 955.502H246.361c0-146.707 118.93-265.639 265.638-265.639 146.709 0 265.641 118.932 265.641 265.639z"
        fill={getIconColor(color, 2, '#CFEAEC')}
      />
      <Path
        d="M512 725.19m-101.206 0a101.206 101.206 0 1 0 202.412 0 101.206 101.206 0 1 0-202.412 0Z"
        fill={getIconColor(color, 3, '#B9BEBD')}
      />
      <Path
        d="M770.375 536.519c0.874-7.715 1.413-35.53 1.609-43.433-2.44 0.072-14.889 20.119-17.347 20.119-129.646 0-145.79-70.583-154.686-197.97-8.896 127.387-185.037 197.97-314.686 197.97-9.655 0-29.174-20.576-38.538-21.662 0.168 8.996 0.792 37.88 1.841 46.634-22.642 8.134-38.839 29.788-38.839 55.23 0 32.405 26.271 58.676 58.676 58.676a58.558 58.558 0 0 0 19.915-3.473c46.739 72.617 128.278 120.716 221.056 120.716 93.554 0 175.673-48.912 222.215-122.55a58.472 58.472 0 0 0 24.378 5.307c32.406 0 58.677-26.271 58.677-58.676 0-27.434-18.83-50.467-44.271-56.888z"
        fill={getIconColor(color, 4, '#F9E5E5')}
      />
      <Path
        d="M512 721.386c-30.215 0-54.796-24.581-54.796-54.795h10c0 24.7 20.096 44.795 44.796 44.795s44.796-20.095 44.796-44.795h10c0 30.214-24.581 54.795-54.796 54.795zM396 525.333c-14.154 0-26.642 7.118-34.092 17.967a44.5 44.5 0 0 1-12.059-17.852l-9.392 3.433a54.458 54.458 0 0 0 16.731 23.536 41.234 41.234 0 0 0-2.523 14.249C354.666 589.494 373.172 608 396 608s41.333-18.506 41.333-41.334c0-22.827-18.506-41.333-41.333-41.333zM624.688 526.333c14.153 0 26.643 7.118 34.092 17.967a44.49 44.49 0 0 0 12.059-17.852l9.393 3.433a54.458 54.458 0 0 1-16.731 23.536 41.257 41.257 0 0 1 2.523 14.249c0 22.828-18.507 41.334-41.334 41.334-22.828 0-41.334-18.506-41.334-41.334-0.002-22.827 18.502-41.333 41.332-41.333z"
        fill={getIconColor(color, 5, '#322B2C')}
      />
      <Path
        d="M390.003 640.213c0 5.848-3.781 10.586-8.446 10.586H324.45c-4.665 0-8.446-4.738-8.446-10.586 0-5.846 3.781-10.586 8.446-10.586h57.107c4.665 0 8.446 4.74 8.446 10.586zM703.134 636.117c0 5.848-3.782 10.586-8.446 10.586H637.58c-4.664 0-8.446-4.738-8.446-10.586 0-5.846 3.782-10.586 8.446-10.586h57.107c4.665 0 8.447 4.74 8.447 10.586z"
        fill={getIconColor(color, 6, '#F3A089')}
      />
    </Svg>
  );
};

IconNanhai.defaultProps = {
  size: 30,
};

export default IconNanhai;
