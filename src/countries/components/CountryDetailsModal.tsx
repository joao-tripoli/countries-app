import {
  Accordion,
  AccordionItem,
  Box,
  ButtonGroup,
  Flex,
  Text,
} from '@vibe/core';
import {
  Modal,
  ModalBasicLayout,
  ModalContent,
  ModalHeader,
  type ModalProps,
} from '@vibe/core/next';
import { useState } from 'react';

import { useWeather } from '../hooks/useFetchCountryWeather';

type Props = Omit<ModalProps, 'children' | 'id'> & {
  country: Country | undefined;
};

const CountryDetailsModal = (props: Props) => {
  const { country, ...modalProps } = props;

  const [tempUnit, setTempUnit] = useState<'c' | 'f'>('c');

  const { data: weather } = useWeather(country?.name ?? '');

  return (
    <Modal id="weather-modal" size="medium" {...modalProps}>
      <ModalBasicLayout>
        <ModalHeader
          title={country?.name}
          description={
            <Text type="text1">{weather?.current.condition.text}</Text>
          }
        />

        <ModalContent>
          <Flex justify="end">
            <ButtonGroup
              onSelect={(value) => setTempUnit(value as 'c' | 'f')}
              options={[
                {
                  text: '°C',
                  value: 'c',
                },
                {
                  text: '°F',
                  value: 'f',
                },
              ]}
              value={1}
            />
          </Flex>

          <Flex align="center" justify="center">
            <Text
              align="inherit"
              element="p"
              weight="bold"
              style={{ fontSize: '4rem' }}
            >
              {tempUnit === 'c'
                ? weather?.current.temp_c
                : weather?.current.temp_f}
              °{tempUnit.toUpperCase()}
            </Text>

            {weather?.current.condition.icon && (
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather?.current.condition.text}
              />
            )}
          </Flex>

          <Box marginTop="large">
            <Accordion>
              <AccordionItem title="Details">
                <Flex direction="column" gap="medium">
                  <DetailItem label="Region" value={country?.region} />
                  <DetailItem label="Subregion" value={country?.subregion} />
                  <DetailItem label="Capital" value={country?.capital} />
                  <DetailItem label="Location" value={country?.location} />
                  <DetailItem label="Phone Code" value={country?.phone_code} />
                  <DetailItem label="Currency" value={country?.currency} />
                  <DetailItem
                    label="Currency name"
                    value={country?.currency_name}
                  />
                  <DetailItem label="Latitude" value={country?.latitude} />
                  <DetailItem label="Longitude" value={country?.longitude} />
                  <DetailItem
                    label="Population"
                    value={new Intl.NumberFormat('en-US').format(
                      country?.numbers ?? 0
                    )}
                  />
                  <DetailItem
                    label="Area"
                    value={new Intl.NumberFormat('en-US').format(
                      country?.numbers6 ?? 0
                    )}
                  />
                  <DetailItem
                    label="Population density"
                    value={country?.numbers2}
                  />
                  <DetailItem label="Net migration" value={country?.numbers0} />
                  <DetailItem
                    label="GDP ($ per capita)"
                    value={country?.numbers7}
                  />
                  <DetailItem label="Birth rate" value={country?.numbers9} />
                  <DetailItem label="Death rate" value={country?.numbers8} />
                </Flex>
              </AccordionItem>

              <AccordionItem title="Weather details">
                <div
                  style={{
                    height: 150,
                  }}
                />
              </AccordionItem>
            </Accordion>
          </Box>
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

type DetailItemProps = {
  label: string;
  value: any;
};

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <Flex justify="space-between" style={{ width: '100%' }}>
      <Text type="text1" color="secondary">
        {label}
      </Text>

      <Text type="text1">{value}</Text>
    </Flex>
  );
};

export default CountryDetailsModal;
