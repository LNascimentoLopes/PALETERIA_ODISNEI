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
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";

export default function Perfil() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();

  // Form fields
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mostrarCamera, setMostrarCamera] = useState(false);

  // Load saved profile on mount
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

  // Camera still loading
  if (!permission) {
    return <View />;
  }

  // Toggle camera front/back
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Save profile to AsyncStorage
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
      <StatusBar barStyle="light-content" backgroundColor="#2A4F3D" />

      <ScrollView
        style={estilos.fundo}
        contentContainerStyle={estilos.scrollConteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={estilos.header}>
          <Texto style={estilos.headerTitulo}>Perfil do Cliente</Texto>
          <Texto style={estilos.headerSubtitulo}>
            Gerencie suas informações pessoais
          </Texto>
        </View>

        {/* Camera Section */}
        <View style={estilos.secaoCamera}>
          <Texto style={estilos.labelCamera}>Foto de Perfil</Texto>

          {!permission.granted ? (
            <View style={estilos.permissaoContainer}>
              <Ionicons name="camera-outline" size={48} color="#8B6B4D" />
              <Texto style={estilos.textoPermissao}>
                Precisamos da sua autorização para acessar a câmera
              </Texto>
              <TouchableOpacity
                style={estilos.botaoPermissao}
                onPress={requestPermission}
              >
                <Texto style={estilos.textoBotaoPermissao}>
                  Permitir Acesso
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
                    <Ionicons name="camera-reverse" size={28} color="white" />
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
              <Ionicons name="camera" size={40} color="#d64550" />
              <Texto style={estilos.textoAbrirCamera}>
                Toque para tirar sua foto de perfil
              </Texto>
            </TouchableOpacity>
          )}
        </View>

        {/* Profile Form Card */}
        <Card mode="elevated" style={estilos.card}>
          <Card.Content>
            <Texto style={estilos.cardTitulo}>Dados Pessoais</Texto>

            {/* Nome Completo */}
            <View style={estilos.campoContainer}>
              <View style={estilos.labelContainer}>
                <Ionicons name="person-outline" size={18} color="#d64550" />
                <Texto style={estilos.label}> Nome Completo *</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome completo"
                placeholderTextColor="#BFA88A"
              />
            </View>

            {/* E-mail */}
            <View style={estilos.campoContainer}>
              <View style={estilos.labelContainer}>
                <Ionicons name="mail-outline" size={18} color="#d64550" />
                <Texto style={estilos.label}> E-Mail</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#BFA88A"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* WhatsApp */}
            <View style={estilos.campoContainer}>
              <View style={estilos.labelContainer}>
                <Ionicons name="logo-whatsapp" size={18} color="#2A4F3D" />
                <Texto style={estilos.label}> WhatsApp</Texto>
              </View>
              <TextInput
                style={estilos.input}
                value={whatsapp}
                onChangeText={setWhatsapp}
                placeholder="(XX) XXXXX-XXXX"
                placeholderTextColor="#BFA88A"
                keyboardType="numeric"
              />
            </View>
          </Card.Content>

          <Card.Actions style={estilos.cardAcoes}>
            <TouchableOpacity style={estilos.botaoSalvar} onPress={salvarPerfil}>
              <Ionicons name="save-outline" size={18} color="#FFF0DD" />
              <Texto style={estilos.textoBotaoSalvar}> Salvar Dados</Texto>
            </TouchableOpacity>
          </Card.Actions>
        </Card>

        {/* Hotel info footer */}
        <View style={estilos.rodape}>
          <Texto style={estilos.rodapeTexto}>
            Paleteria Odisnei – Mongólia
          </Texto>
          <Texto style={estilos.rodapeSubTexto}>
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
    backgroundColor: "#FFF0DD",
  },
  scrollConteudo: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#d64550",
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerTitulo: {
    fontFamily: "FonteBold",
    fontSize: 26,
    color: "#E2C7A0",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 4,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: "#FFF0DD",
    textAlign: "center",
    fontStyle: "italic",
  },
  secaoCamera: {
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelCamera: {
    fontFamily: "FonteBold",
    fontSize: 16,
    color: "#d64550",
    marginBottom: 12,
  },
  permissaoContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF0DD",
    borderRadius: 12,
    gap: 12,
  },
  textoPermissao: {
    color: "#1C2826",
    fontSize: 14,
    textAlign: "center",
  },
  botaoPermissao: {
    backgroundColor: "#d64550",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textoBotaoPermissao: {
    fontFamily: "FonteBold",
    color: "#FFF0DD",
    fontSize: 14,
  },
  cameraWrapper: {
    borderRadius: 12,
    overflow: "hidden",
    height: 280,
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
    backgroundColor: "#FFF0DD",
    borderRadius: 12,
    height: 140,
    gap: 10,
    borderWidth: 2,
    borderColor: "#E2C7A0",
    borderStyle: "dashed",
  },
  textoAbrirCamera: {
    color: "#d64550",
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    elevation: 3,
  },
  cardTitulo: {
    fontFamily: "FonteBold",
    fontSize: 18,
    color: "#d64550",
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2C7A0",
  },
  campoContainer: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    color: "#d64550",
    fontSize: 14,
    fontFamily: "FonteBold",
  },
  input: {
    backgroundColor: "#FFF0DD",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#d64550",
    fontFamily: "FonteRegular",
    borderWidth: 1,
    borderColor: "#E2C7A0",
  },
  cardAcoes: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "center",
  },
  botaoSalvar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d64550",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 6,
  },
  textoBotaoSalvar: {
    fontFamily: "FonteBold",
    color: "#FFF0DD",
    fontSize: 16,
  },
  rodape: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#d64550",
    borderRadius: 12,
    alignItems: "center",
    gap: 6,
  },
  rodapeTexto: {
    fontFamily: "FonteBold",
    color: "#E2C7A0",
    fontSize: 14,
    textAlign: "center",
  },
  rodapeSubTexto: {
    color: "#FFF0DD",
    fontSize: 12,
    textAlign: "center",
    fontStyle: "italic",
  },
});
