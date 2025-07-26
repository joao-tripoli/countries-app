import { Text } from '@vibe/core';
import {
  Modal,
  ModalBasicLayout,
  ModalContent,
  ModalHeader,
  type ModalProps,
} from '@vibe/core/next';
import { useEffect } from 'react';
import { useWeather } from '../hooks/useFetchCountryWeather';

type Props = Omit<ModalProps, 'children' | 'id'> & {
  location: string;
};

const WeatherModal = (props: Props) => {
  const { location, ...modalProps } = props;

  const { data } = useWeather(location);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <Modal id="weather-modal" size="medium" {...modalProps}>
      <ModalBasicLayout>
        <ModalHeader
          // description={<Text type="text1">{region}</Text>}
          title={location}
        />

        <ModalContent>
          <Text align="inherit" element="p" type="text1">
            {data?.current.temp_c}°C / {data?.current.temp_f}°F
          </Text>
        </ModalContent>
      </ModalBasicLayout>

      {/* <ModalFooter
            primaryButton={{
              onClick: function noRefCheck() {},
              text: 'Confirm',
            }}
            secondaryButton={{
              onClick: function noRefCheck() {},
              text: 'Cancel',
            }}
          /> */}
    </Modal>
  );
};

export default WeatherModal;
