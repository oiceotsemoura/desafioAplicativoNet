import React, {useState, useRef, useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import RNFS from 'react-native-fs';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {useDetails} from './hooks/useDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Routes, RootStackParamList} from '@constants/routes';
import {Typography, Button} from '@components/index';
import S from './styles';

export const DetailsScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, Routes.DETAILS>>();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  const {
    deleteIsLoading,
    deleteProductOperation,
    updateIsLoading,
    updatePhoto,
  } = useDetails();

  const [showCamera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      const data = await RNFS.readFile(photo.path, 'base64').then(res => {
        return res;
      });
      const base64 = `data:image/png;base64,${data}`;
      setImageSource(base64);
      setShowCamera(false);
      updatePhoto(params.product.id!, {thumbnail: base64});
    }
  };

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setHasPermission(cameraPermissionStatus === 'granted');
    })();
  }, []);

  const shouldShowCamera = useMemo(() => {
    return showCamera && device && hasPermission;
  }, [showCamera, device, hasPermission]);

  return (
    <S.Container>
      {shouldShowCamera ? (
        <>
          <Camera
            device={device!}
            ref={camera}
            style={StyleSheet.absoluteFill}
            isActive={true}
            photo={true}
          />

          <S.TakePhotButtomContainer>
            <S.TakePhotButtom onPress={() => capturePhoto()} />
          </S.TakePhotButtomContainer>
        </>
      ) : (
        <>
          <S.Content>
            <S.Title>Detalhes</S.Title>
            <S.ProductImage
              source={{
                uri: imageSource ? imageSource : params.product.thumbnail,
              }}
            />
            <Typography variation="Heading5">
              {params.product.description}
            </Typography>
          </S.Content>
          <S.Footer>
            <Button
              loading={updateIsLoading}
              title="Editar"
              onPress={() => setShowCamera(true)}
            />
            <Button
              title="Apagar"
              mode="outlined"
              onPress={() => deleteProductOperation(params.product.id!)}
              loading={deleteIsLoading}
            />
          </S.Footer>
        </>
      )}
    </S.Container>
  );
};
