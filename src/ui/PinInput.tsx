import React, { useRef, useState } from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import tw from '../lib/tailwind';


interface PinInputProps {
  onComplete?: (pin: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({ onComplete = () => {} }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return; 

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move to the next input if available
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }

    // Check if PIN is complete
    if (newPin.every((digit) => digit !== '')) {
      if (typeof onComplete === 'function') {
        onComplete(newPin.join(''));
      }
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && pin[index] === '') {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={tw`flex-row justify-between w-3/5 mb-5`}>
      {pin.map((digit, index) => (
        <View key={index} style={tw`w-12 h-12 text-2xl rounded-lg bg-[#f4f4f4] text-center`}>
          <TextInput
            ref={inputRefs[index]}
            style={tw`w-12 h-12 text-2xl text-center`}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            secureTextEntry={true} 
            onKeyPress={(e) => handleKeyPress(e, index)}
            textAlign="center"
            editable={true}
          />
        </View>
      ))}
    </View>
  );
};

export default PinInput;


