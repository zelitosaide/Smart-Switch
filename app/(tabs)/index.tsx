import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">.Conceitos Básicos</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Automação Residencial</ThemedText>
        <ThemedText>
          Automação residencial, ou domótica, é a integração de tecnologia em sistemas e dispositivos para controlar aspectos do ambiente doméstico de forma automatizada e inteligente. Esse campo tem crescido significativamente, proporcionando maior conveniência, segurança, eficiência energética e conforto para os residentes.
        </ThemedText>

        <ThemedText type="subtitle">1. Controle e Monitoramento Remoto:</ThemedText>
        <ThemedText>
          Com automação residencial, os usuários podem controlar e monitorar dispositivos e sistemas de sua casa remotamente através de smartphones, tablets ou computadores. Isso inclui acender ou apagar luzes, ajustar a temperatura do termostato, trancar ou destrancar portas e monitorar câmeras de segurança.
        </ThemedText>

        <ThemedText type="subtitle">2. Sensores e Atuadores:</ThemedText>
        <ThemedText>
          Sensores são dispositivos que detectam mudanças no ambiente, como movimento, temperatura, luminosidade, umidade, entre outros. Atuadores são dispositivos que realizam ações com base nos sinais recebidos dos sensores, como ligar uma lâmpada ou ajustar o termostato.
        </ThemedText>

        <ThemedText type="subtitle">3. Protocolos de Comunicação:</ThemedText>
        <ThemedText>
          A automação residencial utiliza diversos protocolos de comunicação para permitir a interação entre dispositivos. Alguns dos mais comuns incluem Zigbee, Z-Wave, Wi-Fi, Bluetooth, e Thread. Esses protocolos definem como os dispositivos se comunicam entre si e com o controlador central.
        </ThemedText>

        <ThemedText type="subtitle">4. Hubs e Controladores:</ThemedText>
        <ThemedText>
          Um hub ou controlador centraliza o controle de todos os dispositivos automatizados. Ele pode ser um dispositivo dedicado ou um aplicativo no smartphone. Exemplos incluem hubs como Samsung SmartThings, Amazon Echo (com Alexa) e Google Nest Hub.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
