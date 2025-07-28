import {
  Accordion,
  AccordionItem,
  Box,
  ButtonGroup,
  Flex,
  Skeleton,
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

import dayjs from 'dayjs';
import format from '../../../utils/format';
import { useFetchCountryWeather } from '../hooks/useFetchCountryWeather';

type Props = Omit<ModalProps, 'children' | 'id'> & {
  country: Country | undefined;
};

const CountryDetailsModal = (props: Props) => {
  const { country, ...modalProps } = props;

  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('c');

  const { data: weather, isLoading } = useFetchCountryWeather(
    country?.name ?? ''
  );

  return (
    <Modal id="weather-modal" size="large" {...modalProps}>
      <ModalBasicLayout>
        <ModalHeader
          title={country?.name}
          description={<Text type="text1">{country?.region}</Text>}
        />

        <ModalContent>
          <WeatherInfo
            weather={weather}
            isLoading={isLoading}
            tempUnit={tempUnit}
            setTempUnit={setTempUnit}
          />

          <Box marginTop="large">
            <Accordion>
              <AccordionItem title="Details">
                <CountryDetailsContent country={country} />
              </AccordionItem>

              <AccordionItem title="Weather details">
                <WeatherDetailsContent weather={weather} unit={tempUnit} />
              </AccordionItem>
            </Accordion>
          </Box>
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

type WeatherInfoProps = {
  weather: CurrentWeather | undefined;
  isLoading: boolean;
  tempUnit: TemperatureUnit;
  setTempUnit: (unit: TemperatureUnit) => void;
};

const WeatherInfo = (props: WeatherInfoProps) => {
  const { weather, isLoading, tempUnit, setTempUnit } = props;

  if (!weather?.current && !isLoading) {
    return (
      <Text type="text1" align="center">
        No weather data available
      </Text>
    );
  }

  return (
    <>
      <Flex justify="end">
        <ButtonGroup
          value={tempUnit}
          onSelect={(value) => setTempUnit(value as TemperatureUnit)}
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
        />
      </Flex>

      <Flex align="center" justify="center">
        {isLoading ? (
          <Skeleton width={200} height={64} />
        ) : (
          <>
            <Text
              align="inherit"
              element="p"
              weight="bold"
              style={{ fontSize: '4rem' }}
            >
              {tempUnit === 'c'
                ? weather?.current?.temp_c
                : weather?.current?.temp_f}
              °{tempUnit.toUpperCase()}
            </Text>

            {weather?.current?.condition.icon && (
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather?.current.condition.text}
              />
            )}
          </>
        )}
      </Flex>
    </>
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

type CountryDetailsContentProps = {
  country: Country | undefined;
};

const CountryDetailsContent = ({ country }: CountryDetailsContentProps) => {
  return (
    <Flex direction="column" gap="medium">
      <DetailItem label="Region" value={country?.region} />
      <DetailItem label="Subregion" value={country?.subregion} />
      <DetailItem label="Capital" value={country?.capital} />
      <DetailItem label="Location" value={country?.location} />
      <DetailItem label="Phone Code" value={country?.phone_code} />
      <DetailItem label="Currency" value={country?.currency} />
      <DetailItem label="Currency name" value={country?.currency_name} />
      <DetailItem label="Latitude" value={country?.latitude} />
      <DetailItem label="Longitude" value={country?.longitude} />
      <DetailItem label="Population" value={format.number(country?.numbers)} />
      <DetailItem label="Area" value={format.number(country?.numbers6)} />
      <DetailItem
        label="Population density"
        value={format.number(country?.numbers2)}
      />
      <DetailItem
        label="Net migration"
        value={format.number(country?.numbers0)}
      />
      <DetailItem
        label="GDP ($ per capita)"
        value={format.number(country?.numbers7)}
      />
      <DetailItem label="Birth rate" value={format.number(country?.numbers9)} />
      <DetailItem label="Death rate" value={format.number(country?.numbers8)} />
    </Flex>
  );
};

type WeatherDetailsContentProps = {
  weather: CurrentWeather | undefined;
  unit: TemperatureUnit;
};

const WeatherDetailsContent = ({
  weather,
  unit,
}: WeatherDetailsContentProps) => {
  if (!weather?.current) {
    return (
      <Text type="text1" align="center">
        No weather data available
      </Text>
    );
  }

  return (
    <Flex direction="column" gap="medium">
      <DetailItem
        label="Last updated"
        value={dayjs
          .unix(weather.current.last_updated_epoch)
          .format('DD/MM/YYYY HH:mm')}
      />
      <DetailItem
        label="Temperature"
        value={format.temperature(
          unit === 'c' ? weather.current.temp_c : weather.current.temp_f,
          unit
        )}
      />
      <DetailItem
        label="Feels like"
        value={format.temperature(
          unit === 'c'
            ? weather.current.feelslike_c
            : weather.current.feelslike_f,
          unit
        )}
      />
      <DetailItem label="Condition" value={weather.current.condition.text} />
      <DetailItem
        label="Wind speed kph"
        value={weather.current.wind_kph + ' kph'}
      />
      <DetailItem
        label="Wind speed mph"
        value={weather.current.wind_mph + ' mph'}
      />
      <DetailItem label="Humidity" value={`${weather.current.humidity}%`} />
    </Flex>
  );
};

export default CountryDetailsModal;
