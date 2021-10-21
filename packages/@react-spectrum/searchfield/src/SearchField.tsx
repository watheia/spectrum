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

import { useSearchField } from "@react-aria/searchfield";
import { ClearButton } from "@react-spectrum/button";
import { useProviderProps } from "@react-spectrum/provider";
import { TextFieldBase } from "@react-spectrum/textfield";
import { classNames } from "@react-spectrum/utils";
import { useSearchFieldState } from "@react-stately/searchfield";
import { SpectrumSearchFieldProps } from "@react-types/searchfield";
import { TextFieldRef } from "@react-types/textfield";
import Magnifier from "@spectrum-icons/ui/Magnifier";
import styles from "@watheia/spectrum-css-temp/components/search/vars.css";
import React, { forwardRef, RefObject, useRef } from "react";

function SearchField(props: SpectrumSearchFieldProps, ref: RefObject<TextFieldRef>) {
  props = useProviderProps(props);
  let defaultIcon = (
    <Magnifier data-testid="searchicon" />
  );

  let {
    icon = defaultIcon,
    isDisabled,
    UNSAFE_className,
    ...otherProps
  } = props;

  let state = useSearchFieldState(props);
  let inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>();
  let {labelProps, inputProps, clearButtonProps} = useSearchField(props, state, inputRef);

  let clearButton = (
    <ClearButton
      {...clearButtonProps}
      preventFocus
      UNSAFE_className={
        classNames(
          styles,
          "spectrum-ClearButton"
        )
      }
      isDisabled={isDisabled} />
  );

  return (
    <TextFieldBase
      {...otherProps}
      labelProps={labelProps}
      inputProps={inputProps}
      UNSAFE_className={
        classNames(
          styles,
          "spectrum-Search",
          "spectrum-Textfield",
          {
            "is-disabled": isDisabled,
            "is-quiet": props.isQuiet,
            "spectrum-Search--invalid": props.validationState === "invalid",
            "spectrum-Search--valid": props.validationState === "valid"
          },
          UNSAFE_className
        )
      }
      inputClassName={classNames(styles, "spectrum-Search-input")}
      ref={ref}
      inputRef={inputRef}
      isDisabled={isDisabled}
      icon={icon}
      wrapperChildren={(state.value !== "" && !props.isReadOnly) && clearButton} />
  );
}

/**
 * A SearchField is a text field designed for searches.
 */
let _SearchField = forwardRef(SearchField);
export { _SearchField as SearchField };

