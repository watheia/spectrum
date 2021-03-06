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

import { useProgressBar } from "@react-aria/progress";
import { classNames } from "@react-spectrum/utils";
import { SpectrumProgressBarProps } from "@react-types/progress";
import { DOMRef } from "@react-types/shared";
import styles from "@watheia/spectrum-css-temp/components/barloader/vars.css";
import React from "react";
import { ProgressBarBase } from "./ProgressBarBase";

function ProgressBar(props: SpectrumProgressBarProps, ref: DOMRef<HTMLDivElement>) {
  let {variant, ...otherProps} = props;
  const {
    progressBarProps,
    labelProps
  } = useProgressBar(props);

  return (
    <ProgressBarBase
      {...otherProps}
      ref={ref}
      barProps={progressBarProps}
      labelProps={labelProps}
      barClassName={
        classNames(
          styles,
          {
            "spectrum-BarLoader--overBackground": variant === "overBackground"
          }
        )
      } />
  );
}

/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
let _ProgressBar = React.forwardRef(ProgressBar);
export { _ProgressBar as ProgressBar };

