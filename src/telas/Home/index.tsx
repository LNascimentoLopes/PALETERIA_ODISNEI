import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import type { VideoViewProps } from "expo-video";

import Texto from "../../componentes/Texto";

// Cast necessário pois VideoView é uma classe nativa — sem isso o TS
// emite ts(2607): "does not have a 'props' property"
const VideoViewComponent = VideoView as React.ComponentType<VideoViewProps>;

export default function Home() {
  // Tour video with loop and autoplay as per project spec
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  return (
    <ScrollView style={estilos.fundo}>
      <StatusBar barStyle="light-content" backgroundColor="#2A4F3D" />

      {/* Header Banner */}
      <View style={estilos.banner}>
        <Texto style={estilos.bannerTitulo}>Paleteria Odisnei</Texto>
        <Texto style={estilos.bannerSubtitulo}>Direto da mongólia</Texto>
      </View>

      {/* About Section */}
      <View style={estilos.secao}>
        <Texto style={estilos.tituloSecao}>Sobre Nós</Texto>
        <Texto style={estilos.subtituloSecao}>
          Conheça um pouco sobre a gente
        </Texto>

        <Image
          source={{
            uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3f/7c/0b/photo0jpg.jpg?w=900&h=500&s=1",
          }}
          style={estilos.imagemSobre}
          resizeMode="cover"
        />

        <Texto style={estilos.textoSobre}>
          Bem-vindo a{" "}
          <Texto style={estilos.negrito}>Paleteria Odisnei</Texto>. Descubra os sabores exóticos, a tradição e a experiência única que só nossa paleteria pode oferecer. Inspirada nas paisagens geladas e na cultura nômade da Mongólia, trazemos paletas artesanais com ingredientes diferenciados, combinações surpreendentes e um ambiente acolhedor para quem busca uma sobremesa inesquecível. Localizada em um ponto estratégico e cheio de personalidade, nossa paleteria é perfeita para reunir amigos, experimentar novos sabores e viver um pedacinho da Mongólia em cada mordida.
          {"\n\n"}No{" "}
          <Texto style={estilos.negrito}>Hotel Elysian Grove</Texto>, cada
          detalhe é pensado para proporcionar uma experiência inesquecível!
        </Texto>
      </View>

      {/* Video Tour Section */}
      <View style={estilos.secao}>
        <Texto style={estilos.tituloSecao}>Tour Virtual</Texto>
        <Texto style={estilos.subtituloSecao}>
          Conheça nossas paletas
        </Texto>

        <VideoViewComponent
          player={player}
          style={estilos.video}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>

      {/* Services Highlights */}
      <View style={estilos.secaoEscura}>
        <Texto style={estilos.tituloSecaoClaro}>Nossos Serviços</Texto>
        <Texto style={estilos.subtituloSecaoClaro}>
          Venha ver o que temos a oferecer
        </Texto>

        <View style={estilos.listaServicos}>
          {[
            "Atendimento Nômade Personalizado",
            "Degustação Mongol ao Redor da Fogueira",
            "Experiência Gelada com Sabores das Estepes",
            "Paletas Artesanais Premium com Recheio Cremoso",
            "Espaço Temático Inspirado nas Yurts Mongóis",
            "Chá Tradicional Mongol e Sobremesas Exclusivas"
          ].map((servico, index) => (
          <View key={index} style={estilos.itemServico}>
            <Texto style={estilos.estrela}>✦</Texto>
            <Texto style={estilos.textoServico}>{servico}</Texto>
          </View>
          ))}
        </View>
      </View>


      {/* Location Section */}
      <View style={estilos.secaoEscura}>
        <Texto style={estilos.tituloSecaoClaro}>Localização</Texto>
        <Texto style={estilos.subtituloSecaoClaro}>
          5 Hurd Horoololiin zam - Mongólia
        </Texto>
        <View style={estilos.mapaPlaceholder}>
          <Texto style={estilos.mapaTexto}>📍 Ver no Mapa</Texto>
        </View>
      </View>

      {/* Contact Footer */}
      <View style={estilos.footer}>
        <Texto style={estilos.footerTitulo}>Venha nos Conhecer</Texto>
        <View style={estilos.contatoRow}>
          <Texto style={estilos.contatoItem}>📱 WhatsApp: (11) 9002-8922</Texto>
        </View>
        <View style={estilos.contatoRow}>
          <Texto style={estilos.contatoItem}>
            📸 Instagram: @PaleteriaOdisnei
          </Texto>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#F8FCE8",
  },
  banner: {
    backgroundColor: "#D64550",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  bannerTitulo: {
    fontFamily: "FonteBold",
    fontSize: 32,
    color: "#E2C7A0",
    textAlign: "center",
    letterSpacing: 2,
  },
  bannerSubtitulo: {
    fontSize: 18,
    color: "#F8FCE8",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 8,
  },
  secao: {
    padding: 20,
    backgroundColor: "#F8FCE8",
  },
  secaoEscura: {
    padding: 20,
    backgroundColor: "#D64550",
  },
  tituloSecao: {
    fontFamily: "FonteBold",
    fontSize: 26,
    color: "#D64550",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 4,
  },
  subtituloSecao: {
    fontSize: 16,
    color: "#E2C7A0",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 16,
  },
  tituloSecaoClaro: {
    fontFamily: "FonteBold",
    fontSize: 26,
    color: "#E2C7A0",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 4,
  },
  subtituloSecaoClaro: {
    fontSize: 16,
    color: "#F8FCE8",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 16,
  },
  imagemSobre: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
  },
  textSobre: {
    color: "#1C2826",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
  },
  textSobreNegrito: {
    fontFamily: "FonteBold",
    color: "#D64550",
  },
  textoSobre: {
    color: "#1C2826",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
  },
  negrito: {
    fontFamily: "FonteBold",
    color: "#D64550",
  },
  listaServicos: {
    marginTop: 8,
  },
  itemServico: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  estrela: {
    color: "#E2C7A0",
    fontSize: 18,
    lineHeight: 26,
  },
  textoServico: {
    color: "#F8FCE8",
    fontSize: 16,
    flex: 1,
    lineHeight: 26,
    letterSpacing: 1,
  },
  video: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    backgroundColor: "#000",
  },
  mapaPlaceholder: {
    backgroundColor: "#D64550",
    borderRadius: 12,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  mapaTexto: {
    color: "#E2C7A0",
    fontSize: 18,
    fontStyle: "italic",
  },
  footer: {
    backgroundColor: "#D64550",
    padding: 24,
    paddingBottom: 40,
  },
  footerTitulo: {
    fontFamily: "FonteBold",
    fontSize: 22,
    color: "#E2C7A0",
    textAlign: "center",
    marginBottom: 16,
  },
  contatoRow: {
    marginBottom: 8,
  },
  contatoItem: {
    color: "#F8FCE8",
    fontSize: 15,
    textAlign: "center",
  },
});
