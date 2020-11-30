import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  className,
  type,
  icon: Icon,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEye, setIsEye] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleSetFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleSetBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFocus={isFocus} isEye={isEye} className={className}>
        {Icon && <Icon size={18} />}
        <input
          type={type === 'password' && isEye ? type : ''}
          onFocus={handleSetFocus}
          onBlur={handleSetBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {(type === 'password' && isEye && (
          <FiEye onClick={() => setIsEye(false)} size={20} />
        )) ||
          (type === 'password' && !isEye && (
            <FiEyeOff onClick={() => setIsEye(true)} size={20} />
          ))}
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Input;
