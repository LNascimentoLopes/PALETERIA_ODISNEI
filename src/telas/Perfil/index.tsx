import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Card } from "react-native-paper";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";

export default function Perfil() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mostrarCamera, setMostrarCamera] = useState(false);

  useEffect(() => {
    async function carregarPerfil() {
      const perfilSalvo = await AsyncStorage.getItem("PerfilCliente");
      if (perfilSalvo) {
        const perfil = JSON.parse(perfilSalvo);
        setNome(perfil.nome || "");
        setEmail(perfil.email || "");
        setWhatsapp(perfil.whatsapp || "");
      }
    }
    carregarPerfil();
  }, []);

  if (!permission) {
    return <View />;
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function salvarPerfil() {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Por favor, informe seu nome completo.");
      return;
    }
    const perfil = { nome, email, whatsapp };
    await AsyncStorage.setItem("PerfilCliente", JSON.stringify(perfil));
    Alert.alert(
      "✅ Perfil Salvo",
      "Seus dados de cliente foram atualizados com sucesso!"
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#B8313A" />

      <ScrollView
        style={estilos.fundo}
        contentContainerStyle={estilos.scrollConteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Header ── */}
        <View style={estilos.hero}>
          <View style={estilos.heroStripe} />
          <View style={estilos.heroContent}>
            <View style={estilos.heroBadge}>
              <Texto style={estilos.heroBadgeTexto}>— Minha Conta —</Texto>
            </View>
            <Texto style={estilos.heroTitulo}>Perfil do{"\n"}Cliente</Texto>
            <View style={estilos.heroDivider}>
              <View style={estilos.heroDividerLine} />
              <Texto style={estilos.heroDividerIcon}>✦</Texto>
              <View style={estilos.heroDividerLine} />
            </View>
            <Texto style={estilos.heroSubtitulo}>
              Gerencie suas informações pessoais
            </Texto>
          </View>
          <View style={estilos.heroWave} />
        </View>

        {/* ── Seção Câmera ── */}
        <View style={estilos.secao}>
          <View style={estilos.cabecalhoSecao}>
            <Texto style={estilos.labelSecao}>— Identidade Visual —</Texto>
            <Texto style={estilos.tituloSecao}>Foto de Perfil</Texto>
          </View>

          {!permission.granted ? (
            <View style={estilos.permissaoContainer}>
              <View style={estilos.permissaoIconeCirculo}>
                <Ionicons name="camera-outline" size={36} color="#B8313A" />
              </View>
              <Texto style={estilos.textoPermissao}>
                Precisamos da sua autorização para acessar a câmera
              </Texto>
              <TouchableOpacity
                style={estilos.botaoPermissao}
                onPress={requestPermission}
              >
                <Ionicons name="camera" size={16} color="#FDF8F0" />
                <Texto style={estilos.textoBotaoPermissao}>
                  {" "}Permitir Acesso
                </Texto>
              </TouchableOpacity>
            </View>
          ) : mostrarCamera ? (
            <View style={estilos.cameraWrapper}>
              <CameraView facing={facing} style={estilos.camera}>
                <View style={estilos.cameraControles}>
                  <TouchableOpacity
                    style={estilos.botaoVirarCamera}
                    onPress={toggleCameraFacing}
                  >
                    <Ionicons name="camera-reverse" size={26} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={estilos.botaoFecharCamera}
                    onPress={() => setMostrarCamera(false)}
                  >
                    <Ionicons name="close-circle" size={32} color="white" />
                  </TouchableOpacity>
                </View>
              </CameraView>
            </View>
          ) : (
            <TouchableOpacity
              style={estilos.botaoAbrirCamera}
              onPress={() => setMostrarCamera(true)}
            >
              <View style={estilos.cameraIconeCirculo}>
                <Ionicons name="camera" size={32} color="#B8313A" />
              </View>
              <Texto style={estilos.textoAbrirCamera}>
                Toque para tirar sua foto
              </Texto>
              <Texto style={estilos.textoAbrirCameraHint}>
                Frente ou verso da câmera
              </Texto>
            </TouchableOpacity>
          )}
        </View>

        {/* ── Divisor ── */}
        <View style={estilos.divisorFaixa}>
          <Texto style={estilos.divisorTexto}>✦  ✦  ✦</Texto>
        </View>

        {/* ── Formulário ── */}
        <View style={estilos.secao}>
          <View style={estilos.cabecalhoSecao}>
            <Texto style={estilos.labelSecao}>— Suas Informações —</Texto>
            <Texto style={estilos.tituloSecao}>Dados Pessoais</Texto>
          </View>

          <View style={estilos.formCard}>
            {/* Nome */}
            <View style={estilos.campoContainer}>
              <View style={estilos.labelContainer}>
                <Ionicons name="person-outline" size={15} color="#B8313A" />
                <Texto style={estilos.label}>  Nome Completo</Texto>
                <Texto style={estilos.labelObrigatorio}> *</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome completo"
                placeholderTextColor="#C4A882"
              />
            </View>

            {/* E-mail */}
            <View style={estilos.campoContainer}>
              <View style={estilos.labelContainer}>
                <Ionicons name="mail-outline" size={15} color="#B8313A" />
                <Texto style={estilos.label}>  E-mail</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#C4A882"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* WhatsApp */}
            <View style={[estilos.campoContainer, { marginBottom: 0 }]}>
              <View style={estilos.labelContainer}>
                <Ionicons name="logo-whatsapp" size={15} color="#25D366" />
                <Texto style={estilos.label}>  WhatsApp</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={whatsapp}
                onChangeText={setWhatsapp}
                placeholder="(XX) XXXXX-XXXX"
                placeholderTextColor="#C4A882"
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Botão Salvar */}
          <TouchableOpacity style={estilos.botaoSalvar} onPress={salvarPerfil}>
            <Ionicons name="save-outline" size={18} color="#FDF8F0" />
            <Texto style={estilos.textoBotaoSalvar}>  Salvar Dados</Texto>
          </TouchableOpacity>
        </View>

        {/* ── Footer ── */}
        <View style={estilos.footer}>
          <View style={estilos.footerTopo}>
            <View style={estilos.footerDividerLine} />
            <Texto style={estilos.footerDividerIcon}>✦</Texto>
            <View style={estilos.footerDividerLine} />
          </View>
          <Texto style={estilos.footerTitulo}>Paleteria Odisnei</Texto>
          <Texto style={estilos.footerSubtexto}>Mongólia</Texto>
          <Texto style={estilos.footerNota}>
            Seus dados são protegidos e usados apenas para o seu prazer
          </Texto>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#FDF8F0",
  },
  scrollConteudo: {
    paddingBottom: 0,
  },

  /* ─── Hero ─── */
  hero: {
    backgroundColor: "#B8313A",
    overflow: "hidden",
  },
  heroStripe: {
    height: 6,
    backgroundColor: "#E2C7A0",
  },
  heroContent: {
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  heroBadge: {
    borderWidth: 1.5,
    borderColor: "#E2C7A0",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom: 18,
  },
  heroBadgeTexto: {
    color: "#E2C7A0",
    fontSize: 11,
    letterSpacing: 3,
  },
  heroTitulo: {
    fontFamily: "FonteBold",
    fontSize: 42,
    color: "#FDF8F0",
    textAlign: "center",
    lineHeight: 48,
  },
  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
    marginVertical: 16,
  },
  heroDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2C7A0",
    opacity: 0.6,
  },
  heroDividerIcon: {
    color: "#E2C7A0",
    fontSize: 13,
    marginHorizontal: 10,
  },
  heroSubtitulo: {
    fontSize: 15,
    color: "#F0DDBB",
    fontStyle: "italic",
    letterSpacing: 0.5,
  },
  heroWave: {
    height: 28,
    backgroundColor: "#FDF8F0",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  /* ─── Seções ─── */
  secao: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 28,
    backgroundColor: "#FDF8F0",
  },
  cabecalhoSecao: {
    alignItems: "center",
    marginBottom: 18,
  },
  labelSecao: {
    fontSize: 11,
    color: "#B8313A",
    letterSpacing: 3,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  tituloSecao: {
    fontFamily: "FonteBold",
    fontSize: 28,
    color: "#1C1A18",
    textAlign: "center",
  },

  /* ─── Câmera ─── */
  permissaoContainer: {
    alignItems: "center",
    backgroundColor: "#F0E8D8",
    borderRadius: 20,
    padding: 28,
    gap: 14,
  },
  permissaoIconeCirculo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FDF8F0",
    borderWidth: 2,
    borderColor: "#E2C7A0",
    justifyContent: "center",
    alignItems: "center",
  },
  textoPermissao: {
    color: "#2E2B27",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },
  botaoPermissao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B8313A",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 4,
  },
  textoBotaoPermissao: {
    fontFamily: "FonteBold",
    color: "#FDF8F0",
    fontSize: 14,
  },
  cameraWrapper: {
    borderRadius: 20,
    overflow: "hidden",
    height: 290,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  camera: {
    flex: 1,
  },
  cameraControles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "transparent",
  },
  botaoVirarCamera: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 30,
    alignSelf: "flex-end",
  },
  botaoFecharCamera: {
    alignSelf: "flex-start",
  },
  botaoAbrirCamera: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0E8D8",
    borderRadius: 20,
    height: 160,
    gap: 10,
    borderWidth: 2,
    borderColor: "#E2C7A0",
    borderStyle: "dashed",
  },
  cameraIconeCirculo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FDF8F0",
    borderWidth: 2,
    borderColor: "#E2C7A0",
    justifyContent: "center",
    alignItems: "center",
  },
  textoAbrirCamera: {
    color: "#B8313A",
    fontSize: 15,
    fontFamily: "FonteBold",
  },
  textoAbrirCameraHint: {
    color: "#9A8878",
    fontSize: 12,
    fontStyle: "italic",
  },

  /* ─── Divisor ─── */
  divisorFaixa: {
    backgroundColor: "#F0E8D8",
    paddingVertical: 14,
    alignItems: "center",
  },
  divisorTexto: {
    color: "#B8313A",
    fontSize: 15,
    letterSpacing: 8,
    opacity: 0.55,
  },

  /* ─── Formulário ─── */
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#EDE5D8",
  },
  campoContainer: {
    marginBottom: 18,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    color: "#2E2B27",
    fontSize: 13,
    fontFamily: "FonteBold",
    letterSpacing: 0.5,
  },
  labelObrigatorio: {
    color: "#B8313A",
    fontSize: 14,
    fontFamily: "FonteBold",
  },
  input: {
    backgroundColor: "#FDF8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: "#1C1A18",
    fontFamily: "FonteRegular",
    borderWidth: 1.5,
    borderColor: "#E2C7A0",
  },
  botaoSalvar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8313A",
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: "#B8313A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  textoBotaoSalvar: {
    fontFamily: "FonteBold",
    color: "#FDF8F0",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  /* ─── Footer ─── */
  footer: {
    backgroundColor: "#1C1A18",
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 44,
    alignItems: "center",
  },
  footerTopo: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    marginBottom: 20,
  },
  footerDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2C7A0",
    opacity: 0.35,
  },
  footerDividerIcon: {
    color: "#E2C7A0",
    fontSize: 13,
    marginHorizontal: 10,
  },
  footerTitulo: {
    fontFamily: "FonteBold",
    fontSize: 20,
    color: "#E2C7A0",
    letterSpacing: 1,
    marginBottom: 4,
  },
  footerSubtexto: {
    fontSize: 13,
    color: "#8A7A6A",
    fontStyle: "italic",
    marginBottom: 14,
  },
  footerNota: {
    fontSize: 12,
    color: "#4A4038",
    textAlign: "center",
    lineHeight: 18,
    maxWidth: "80%",
  },
});