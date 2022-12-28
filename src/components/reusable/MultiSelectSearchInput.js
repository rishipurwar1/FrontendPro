import React, { useRef, useState } from "react"

import useOnClickOutside from "../../hooks/useOnClickOutside"
import { debounce } from "../../utils/shared"
import Icons from "../SvgIcons/Icons"

import BaseInput from "./BaseInput"
import BaseLabel from "./BaseLabel"

const MultiSelectSearchInput = ({
  onChange,
  fetchOptions,
  predefinedOptions,
  label,
  selectedOptions,
}) => {
  const [options, setOptions] = useState(predefinedOptions)
  const [isFocus, setIsFocus] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  const handleSelectChange = async (e) => {
    const { value } = e.target
    if (value.length > 2) {
      setIsLoading(true)
      const result = await fetchOptions(value)
      setOptions(result.items || [])
      setIsLoading(false)
    } else {
      setOptions(predefinedOptions)
    }
  }

  const addSkill = (option) => {
    onChange((prevState) => {
      if (prevState.tags.includes(option)) {
        alert("Skill already exists")
      } else if (prevState.tags.length >= 3) {
        alert("You can only add 3 skills")
      } else {
        return {
          ...prevState,
          tags: [...prevState.tags, option],
        }
      }
      return prevState
    })
    setIsFocus(false)
    inputRef.current.value = ""
    setOptions(predefinedOptions)
  }

  const removeSkill = (option) => {
    onChange((prevState) => {
      const filteredSkills = prevState.tags.filter((item) => item !== option)
      return {
        ...prevState,
        tags: filteredSkills,
      }
    })
  }

  const clearInput = () => {
    onChange((prevState) => {
      return {
        ...prevState,
        tags: [],
      }
    })
  }

  const handleClickOutside = () => {
    setIsFocus(false)
    setOptions(predefinedOptions)
  }

  useOnClickOutside(containerRef, handleClickOutside, isFocus)

  return (
    <div className="relative mb-4" ref={containerRef}>
      <BaseLabel>
        {label} {<span aria-label="required">*</span>}
      </BaseLabel>
      <div className="flex items-center rounded-lg bg-gray-700 overflow-hidden border border-gray-600 focus:ring-gray-500 focus:border-gray-500">
        <ul aria-labelledby="selected-skills">
          {selectedOptions.map((skill, index) => (
            <li
              key={index}
              className="text-xs text-white bg-gray-600 font-medium uppercase inline-flex items-center px-2.5 py-0.5 rounded first:ml-2 last:mr-0 mr-2"
            >
              {skill}
              <button
                type="button"
                className="-mr-1"
                aria-label={`Remove ${skill} skill`}
                onClick={() => removeSkill(skill)}
              >
                <Icons.Cross size={18} />
              </button>
            </li>
          ))}
        </ul>
        <BaseInput
          onChange={debounce(handleSelectChange, 500)}
          onFocus={() => setIsFocus(true)}
          borderLess
          rounded="none"
          className="mb-0 flex-1"
          name="skills"
          innerRef={inputRef}
          placeholder="Add upto 3 skills"
          required={selectedOptions.length === 0}
        />
        {isLoading && (
          <div className="pr-2">
            <Icons.Loader size={18} className="animate-spin text-gray-400" />
          </div>
        )}
        {!isLoading && selectedOptions.length > 1 && (
          <button
            type="button"
            onClick={clearInput}
            className="mr-2 group"
            aria-label="Clear all options"
          >
            <Icons.Cross
              size={18}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>
        )}
      </div>
      <ul
        id="skills"
        className={`absolute top-[calc(100%_+_.25rem)] bg-gray-700 border border-gray-600 placeholder-gray-400 text-white w-full z-50 rounded-lg overflow-x-hidden overflow-y-auto h-auto max-h-52 ${
          isFocus ? "block" : "hidden"
        }`}
      >
        {options.length > 0 ? (
          options.map((skill) => (
            <li
              onClick={() => {
                addSkill(skill.name)
              }}
              key={skill.name}
              className="block w-full text-left cursor-pointer p-2.5 hover:bg-gray-600"
            >
              {skill.name}
            </li>
          ))
        ) : (
          <li className="block w-full text-left cursor-pointer p-2.5">
            Sorry, no skills were found. Maybe try a different search term?{" "}
            <span role="img" aria-label="winking face">
              😉
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MultiSelectSearchInput
