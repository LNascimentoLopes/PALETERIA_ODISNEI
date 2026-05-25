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

const VideoViewComponent = VideoView as React.ComponentType<VideoViewProps>;

export default function Home() {
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  const servicos = [
    { icone: "🏕️", titulo: "Atendimento Nômade", desc: "Personalizado e acolhedor" },
    { icone: "🔥", titulo: "Degustação Mongol", desc: "Ao redor da fogueira" },
    { icone: "❄️", titulo: "Sabores das Estepes", desc: "Experiência gelada única" },
    { icone: "🍦", titulo: "Paletas Premium", desc: "Artesanais com recheio cremoso" },
    { icone: "⛺", titulo: "Espaço Temático", desc: "Inspirado nas Yurts Mongóis" },
    { icone: "🍵", titulo: "Chá Tradicional", desc: "Mongol e sobremesas exclusivas" },
  ];

  return (
    <ScrollView style={estilos.fundo} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#B8313A" />

      {/* ── Hero / Banner ── */}
      <View style={estilos.hero}>
        {/* Decorative top stripe */}
        <View style={estilos.heroStripe} />

        <View style={estilos.heroContent}>
          <View style={estilos.heroBadge}>
            <Texto style={estilos.heroBadgeTexto}>❄ Artesanal ❄</Texto>
          </View>

          <Texto style={estilos.heroTitulo}>Paleteria{"\n"}Odisnei</Texto>

          <View style={estilos.heroDivider}>
            <View style={estilos.heroDividerLine} />
            <Texto style={estilos.heroDividerIcon}>✦</Texto>
            <View style={estilos.heroDividerLine} />
          </View>

          <Texto style={estilos.heroSubtitulo}>Direto da Mongólia</Texto>
        </View>

        {/* Decorative bottom wave */}
        <View style={estilos.heroWave} />
      </View>

      {/* ── Sobre Nós ── */}
      <View style={estilos.secao}>
        <View style={estilos.cabecalhoSecao}>
          <Texto style={estilos.labelSecao}>— Nossa História —</Texto>
          <Texto style={estilos.tituloSecao}>Sobre Nós</Texto>
        </View>

        <View style={estilos.imagemContainer}>
          <Image
            source={{
              uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3f/7c/0b/photo0jpg.jpg?w=900&h=500&s=1",
            }}
            style={estilos.imagemSobre}
            resizeMode="cover"
          />
          <View style={estilos.imagemOverlay} />
          <View style={estilos.imagemBadge}>
            <Texto style={estilos.imagemBadgeTexto}>Desde 2019</Texto>
          </View>
        </View>

        <Texto style={estilos.textoSobre}>
          Bem-vindo à{" "}
          <Texto style={estilos.destaque}>Paleteria Odisnei</Texto>. Descubra os
          sabores exóticos, a tradição e a experiência única que só nossa
          paleteria pode oferecer. Inspirada nas paisagens geladas e na cultura
          nômade da Mongólia, trazemos paletas artesanais com ingredientes
          diferenciados, combinações surpreendentes e um ambiente acolhedor para
          quem busca uma sobremesa inesquecível.
          {"\n\n"}
          Nossa paleteria é perfeita para reunir amigos, experimentar novos
          sabores e viver um pedacinho da{" "}
          <Texto style={estilos.destaque}>Mongólia</Texto> em cada mordida.
        </Texto>
      </View>

      {/* ── Divisor decorativo ── */}
      <View style={estilos.divisorFaixa}>
        <Texto style={estilos.divisorTexto}>✦  ✦  ✦</Texto>
      </View>

      {/* ── Tour Virtual ── */}
      <View style={estilos.secao}>
        <View style={estilos.cabecalhoSecao}>
          <Texto style={estilos.labelSecao}>— Conheça Nosso Espaço —</Texto>
          <Texto style={estilos.tituloSecao}>Tour Virtual</Texto>
        </View>

        <View style={estilos.videoContainer}>
          <VideoViewComponent
            player={player}
            style={estilos.video}
            allowsFullscreen
            allowsPictureInPicture
          />
          <View style={estilos.videoLabel}>
            <Texto style={estilos.videoLabelTexto}>▶ Assistir tour completo</Texto>
          </View>
        </View>
      </View>

      {/* ── Serviços ── */}
      <View style={estilos.secaoServicos}>
        <View style={estilos.cabecalhoSecaoClaro}>
          <Texto style={estilos.labelSecaoClaro}>— O que oferecemos —</Texto>
          <Texto style={estilos.tituloSecaoClaro}>Nossos Serviços</Texto>
        </View>

        <View style={estilos.gradeServicos}>
          {servicos.map((s, i) => (
            <View key={i} style={estilos.cartaoServico}>
              <Texto style={estilos.cartaoIcone}>{s.icone}</Texto>
              <Texto style={estilos.cartaoTitulo}>{s.titulo}</Texto>
              <Texto style={estilos.cartaoDesc}>{s.desc}</Texto>
            </View>
          ))}
        </View>
      </View>

      {/* ── Localização ── */}
      <View style={estilos.secao}>
        <View style={estilos.cabecalhoSecao}>
          <Texto style={estilos.labelSecao}>— Onde estamos —</Texto>
          <Texto style={estilos.tituloSecao}>Localização</Texto>
        </View>

        <View style={estilos.enderecoCard}>
          <Texto style={estilos.enderecoIcone}>📍</Texto>
          <View>
            <Texto style={estilos.enderecoRua}>5 Hurd Horoololiin Zam</Texto>
            <Texto style={estilos.enderecoCidade}>Mongólia</Texto>
          </View>
        </View>

        <View style={estilos.mapaPlaceholder}>
          <Texto style={estilos.mapaIcone}>🗺️</Texto>
          <Texto style={estilos.mapaTexto}>Ver no Mapa</Texto>
        </View>
      </View>

      {/* ── Footer ── */}
      <View style={estilos.footer}>
        <View style={estilos.footerTopo}>
          <View style={estilos.footerDividerLine} />
          <Texto style={estilos.footerDividerIcon}>✦</Texto>
          <View style={estilos.footerDividerLine} />
        </View>

        <Texto style={estilos.footerTitulo}>Venha nos Conhecer</Texto>
        <Texto style={estilos.footerSubtitulo}>Estamos esperando por você</Texto>

        <View style={estilos.contatoContainer}>
          <View style={estilos.contatoCard}>
            <Texto style={estilos.contatoIcone}>📱</Texto>
            <View>
              <Texto style={estilos.contatoLabel}>WhatsApp</Texto>
              <Texto style={estilos.contatoValor}>(11) 9002-8922</Texto>
            </View>
          </View>

          <View style={estilos.contatoCard}>
            <Texto style={estilos.contatoIcone}>📸</Texto>
            <View>
              <Texto style={estilos.contatoLabel}>Instagram</Texto>
              <Texto style={estilos.contatoValor}>@PaleteriaOdisnei</Texto>
            </View>
          </View>
        </View>

        <Texto style={estilos.footerRodape}>© 2025 Paleteria Odisnei</Texto>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#FDF8F0",
  },

  /* ─── Hero ─── */
  hero: {
    backgroundColor: "#B8313A",
    paddingBottom: 0,
    overflow: "hidden",
  },
  heroStripe: {
    height: 6,
    backgroundColor: "#E2C7A0",
  },
  heroContent: {
    alignItems: "center",
    paddingTop: 56,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  heroBadge: {
    borderWidth: 1.5,
    borderColor: "#E2C7A0",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom: 20,
  },
  heroBadgeTexto: {
    color: "#E2C7A0",
    fontSize: 12,
    letterSpacing: 3,
  },
  heroTitulo: {
    fontFamily: "FonteBold",
    fontSize: 48,
    color: "#FDF8F0",
    textAlign: "center",
    lineHeight: 54,
    letterSpacing: 1,
  },
  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    marginVertical: 18,
  },
  heroDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2C7A0",
    opacity: 0.6,
  },
  heroDividerIcon: {
    color: "#E2C7A0",
    fontSize: 14,
    marginHorizontal: 10,
  },
  heroSubtitulo: {
    fontSize: 17,
    color: "#F0DDBB",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  heroWave: {
    height: 28,
    backgroundColor: "#FDF8F0",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  /* ─── Seções ─── */
  secao: {
    paddingHorizontal: 22,
    paddingTop: 8,
    paddingBottom: 32,
    backgroundColor: "#FDF8F0",
  },
  secaoServicos: {
    paddingTop: 32,
    paddingBottom: 40,
    backgroundColor: "#B8313A",
  },

  cabecalhoSecao: {
    alignItems: "center",
    marginBottom: 22,
  },
  labelSecao: {
    fontSize: 12,
    color: "#B8313A",
    letterSpacing: 3,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  tituloSecao: {
    fontFamily: "FonteBold",
    fontSize: 30,
    color: "#1C1A18",
    textAlign: "center",
  },

  cabecalhoSecaoClaro: {
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 22,
  },
  labelSecaoClaro: {
    fontSize: 12,
    color: "#E2C7A0",
    letterSpacing: 3,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  tituloSecaoClaro: {
    fontFamily: "FonteBold",
    fontSize: 30,
    color: "#FDF8F0",
    textAlign: "center",
  },

  /* ─── Imagem Sobre ─── */
  imagemContainer: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  imagemSobre: {
    width: "100%",
    height: 230,
  },
  imagemOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(28, 26, 24, 0.15)",
  },
  imagemBadge: {
    position: "absolute",
    bottom: 14,
    right: 14,
    backgroundColor: "#B8313A",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  imagemBadgeTexto: {
    color: "#FDF8F0",
    fontSize: 12,
    letterSpacing: 1,
  },
  textoSobre: {
    color: "#2E2B27",
    fontSize: 15.5,
    lineHeight: 27,
    textAlign: "justify",
  },
  destaque: {
    fontFamily: "FonteBold",
    color: "#B8313A",
  },

  /* ─── Divisor ─── */
  divisorFaixa: {
    backgroundColor: "#F0E8D8",
    paddingVertical: 14,
    alignItems: "center",
  },
  divisorTexto: {
    color: "#B8313A",
    fontSize: 16,
    letterSpacing: 8,
    opacity: 0.6,
  },

  /* ─── Vídeo ─── */
  videoContainer: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  video: {
    width: "100%",
    height: 224,
    backgroundColor: "#1C1A18",
  },
  videoLabel: {
    backgroundColor: "#1C1A18",
    paddingVertical: 10,
    alignItems: "center",
  },
  videoLabelTexto: {
    color: "#E2C7A0",
    fontSize: 13,
    letterSpacing: 1,
  },

  /* ─── Serviços ─── */
  gradeServicos: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    gap: 10,
  },
  cartaoServico: {
    width: "47%",
    backgroundColor: "rgba(253, 248, 240, 0.12)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(226, 199, 160, 0.3)",
    padding: 16,
    alignItems: "center",
  },
  cartaoIcone: {
    fontSize: 28,
    marginBottom: 8,
  },
  cartaoTitulo: {
    fontFamily: "FonteBold",
    color: "#FDF8F0",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  cartaoDesc: {
    color: "#E2C7A0",
    fontSize: 12,
    textAlign: "center",
    opacity: 0.85,
    lineHeight: 18,
  },

  /* ─── Localização ─── */
  enderecoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0E8D8",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    gap: 12,
  },
  enderecoIcone: {
    fontSize: 24,
  },
  enderecoRua: {
    fontFamily: "FonteBold",
    fontSize: 15,
    color: "#1C1A18",
    marginBottom: 2,
  },
  enderecoCidade: {
    fontSize: 13,
    color: "#6B5F52",
  },
  mapaPlaceholder: {
    backgroundColor: "#B8313A",
    borderRadius: 16,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  mapaIcone: {
    fontSize: 28,
  },
  mapaTexto: {
    color: "#FDF8F0",
    fontSize: 16,
    fontStyle: "italic",
    letterSpacing: 1,
  },

  /* ─── Footer ─── */
  footer: {
    backgroundColor: "#1C1A18",
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 48,
    alignItems: "center",
  },
  footerTopo: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 24,
  },
  footerDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2C7A0",
    opacity: 0.4,
  },
  footerDividerIcon: {
    color: "#E2C7A0",
    fontSize: 14,
    marginHorizontal: 10,
  },
  footerTitulo: {
    fontFamily: "FonteBold",
    fontSize: 24,
    color: "#E2C7A0",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 6,
  },
  footerSubtitulo: {
    fontSize: 14,
    color: "#8A7A6A",
    fontStyle: "italic",
    marginBottom: 28,
  },
  contatoContainer: {
    width: "100%",
    gap: 12,
    marginBottom: 28,
  },
  contatoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(226, 199, 160, 0.08)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(226, 199, 160, 0.18)",
    padding: 16,
    gap: 14,
  },
  contatoIcone: {
    fontSize: 22,
  },
  contatoLabel: {
    fontSize: 11,
    color: "#8A7A6A",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  contatoValor: {
    fontFamily: "FonteBold",
    fontSize: 15,
    color: "#F0DDBB",
  },
  footerRodape: {
    fontSize: 12,
    color: "#4A4038",
    letterSpacing: 1,
  },
});