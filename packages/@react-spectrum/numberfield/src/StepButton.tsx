/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { useButton } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { useProvider, useProviderProps } from "@react-spectrum/provider";
import { classNames } from "@react-spectrum/utils";
import { AriaButtonProps } from "@react-types/button";
import ChevronDownSmall from "@spectrum-icons/ui/ChevronDownSmall";
import ChevronUpSmall from "@spectrum-icons/ui/ChevronUpSmall";
import Add from "@spectrum-icons/workflow/Add";
import Remove from "@spectrum-icons/workflow/Remove";
import stepperStyle from "@watheia/spectrum-css-temp/components/stepper/vars.css";
import React, { RefObject } from "react";

interface StepButtonProps extends AriaButtonProps {
  isQuiet: boolean,
  direction: "up" | "down"
}

function StepButton(props: StepButtonProps, ref: RefObject<HTMLDivElement>) {
  props = useProviderProps(props);
  let {scale} = useProvider();
  let {direction, isDisabled, isQuiet} = props;
  /**
   * Must use div for now because Safari pointer event bugs on disabled form elements.
   * Link https://bugs.webkit.org/show_bug.cgi?id=219188.
   */
  let {buttonProps, isPressed} = useButton({...props, elementType: "div"}, ref);
  let {hoverProps, isHovered} = useHover(props);
  return (
    <FocusRing focusRingClass={classNames(stepperStyle, "focus-ring")}>
      <div
        className={
          classNames(
            stepperStyle,
            "spectrum-Stepper-button",
            {
              "spectrum-Stepper-button--stepUp": direction === "up",
              "spectrum-Stepper-button--stepDown": direction === "down",
              "spectrum-Stepper-button--isQuiet": isQuiet,
              "is-hovered": isHovered,
              "is-active": isPressed,
              "is-disabled": isDisabled
            }
          )
        }
        {...mergeProps(hoverProps, buttonProps)}
        ref={ref}>
        {direction === "up" && scale === "large" &&
          <Add UNSAFE_className={classNames(stepperStyle, "spectrum-Stepper-button-icon", "spectrum-Stepper-stepUpIcon")} size="S" />
        }
        {direction === "up" && scale === "medium" &&
          <ChevronUpSmall UNSAFE_className={classNames(stepperStyle, "spectrum-Stepper-button-icon", "spectrum-Stepper-stepUpIcon")} />
        }
        {direction === "down" && scale === "large" &&
          <Remove UNSAFE_className={classNames(stepperStyle, "spectrum-Stepper-button-icon", "spectrum-Stepper-stepDownIcon")} size="S" />
        }
        {direction === "down" && scale === "medium" &&
          <ChevronDownSmall UNSAFE_className={classNames(stepperStyle, "spectrum-Stepper-button-icon", "spectrum-Stepper-stepDownIcon")} />
        }
      </div>
    </FocusRing>
  );
}

/**
 * Buttons for NumberField.
 */
let _StepButton = React.forwardRef(StepButton);
export { _StepButton as StepButton };

