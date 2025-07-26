import { Text } from '@vibe/core';
import {
  Modal,
  ModalBasicLayout,
  ModalContent,
  ModalHeader,
  type ModalProps,
} from '@vibe/core/next';

type Props = Omit<ModalProps, 'children' | 'id'> & {
  region: string;
};

const WeatherModal = (props: Props) => {
  const { region, ...modalProps } = props;

  return (
    <Modal id="weather-modal" size="medium" {...modalProps}>
      <ModalBasicLayout>
        <ModalHeader
          // description={<Text type="text1">{region}</Text>}
          title={region}
        />

        <ModalContent>
          <Text align="inherit" element="p" type="text1">
            Modal content will appear here, you can custom it however you want,
            according to the user needs. Please make sure that the content is
            clear for completing the relevant task.
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
