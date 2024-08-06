import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Principais Aplicações</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1. Iluminação:</ThemedText>
        <ThemedText>
          Sistemas de iluminação inteligente permitem ajustar a intensidade das luzes, criar cenários de iluminação, programar horários para ligar/desligar e controlar remotamente através de aplicativos.
        </ThemedText>

        <ThemedText type="subtitle">2. Climatização:</ThemedText>
        <ThemedText>
          Termostatos inteligentes, como o Nest, permitem o controle preciso da temperatura, aprendem as preferências do usuário e ajustam automaticamente para otimizar o consumo de energia.
        </ThemedText>

        <ThemedText type="subtitle">3. Segurança:</ThemedText>
        <ThemedText>
          Sistemas de segurança integrados incluem câmeras, sensores de movimento, detectores de fumaça, alarmes e fechaduras inteligentes. Eles proporcionam monitoramento em tempo real e alertas instantâneos em caso de intrusão ou emergências.
        </ThemedText>

        <ThemedText type="subtitle">4. Entretenimento:</ThemedText>
        <ThemedText>
          Automação de sistemas de entretenimento permite controlar dispositivos como TVs, sistemas de som, e alto-falantes inteligentes. É possível criar cenários, como “modo cinema”, que ajustam luzes e equipamentos de áudio/vídeo simultaneamente.
        </ThemedText>

        <ThemedText type="subtitle">5. Eletrodomésticos:</ThemedText>
        <ThemedText>
          Eletrodomésticos inteligentes, como geladeiras, fornos e máquinas de lavar, podem ser controlados remotamente, programados para funcionar em horários específicos e monitorados para eficiência e manutenção preventiva.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#0a7ea4',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
