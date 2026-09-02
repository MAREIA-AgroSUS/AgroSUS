import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TipoColetaScreen from '../screens/coleta/TipoColetaScreen';
import IdentificacaoScreen from '../screens/coleta/IdentificacaoScreen';
import PropriedadeScreen from '../screens/coleta/PropriedadeScreen';
import CapacitacaoScreen from '../screens/coleta/CapacitacaoScreen';
import DefensivosScreen from '../screens/coleta/DefensivosScreen';
import RastreabilidadeScreen from '../screens/coleta/RastreabilidadeScreen';
import ExposicaoScreen from '../screens/coleta/ExposicaoScreen';
import EpisScreen from '../screens/coleta/EpisScreen';
import ArmazenamentoScreen from '../screens/coleta/ArmazenamentoScreen';
import ExposicaoFamiliarScreen from '../screens/coleta/ExposicaoFamiliarScreen';
import SaudeSintomasScreen from '../screens/coleta/SaudeSintomasScreen';
import HistoricoIntoxicacaoScreen from '../screens/coleta/HistoricoIntoxicacaoScreen';
import IndicadoresBoasPraticasScreen from '../screens/coleta/IndicadoresBoasPraticasScreen';
import ObservacoesAcsScreen from '../screens/coleta/ObservacoesAcsScreen';
import ResumoScreen from '../screens/coleta/ResumoScreen';
import ResultadoAutomaticoScreen from '../screens/coleta/ResultadoAutomaticoScreen';
import EncaminhamentoUbsScreen from '../screens/coleta/EncaminhamentoUbsScreen';
import EncerramentoScreen from '../screens/coleta/EncerramentoScreen';
import ConfirmacaoEnvioScreen from '../screens/coleta/ConfirmacaoEnvioScreen';
import DadosAutomaticosScreen from '../screens/coleta/DadosAutomaticosScreen';

import { CollectionProvider } from '../context/CollectionContext';

const Stack = createNativeStackNavigator();

export default function ColetaStackNavigator() {
  return (
    <CollectionProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TipoColeta">
        <Stack.Screen name="TipoColeta" component={TipoColetaScreen} />
        <Stack.Screen name="Identificacao" component={IdentificacaoScreen} />
        <Stack.Screen name="Propriedade" component={PropriedadeScreen} />
        <Stack.Screen name="Capacitacao" component={CapacitacaoScreen} />
        <Stack.Screen name="Defensivos" component={DefensivosScreen} />
        <Stack.Screen name="Rastreabilidade" component={RastreabilidadeScreen} />
        <Stack.Screen name="Exposicao" component={ExposicaoScreen} />
        <Stack.Screen name="Epis" component={EpisScreen} />
        <Stack.Screen name="Armazenamento" component={ArmazenamentoScreen} />
        <Stack.Screen name="ExposicaoFamiliar" component={ExposicaoFamiliarScreen} />
        <Stack.Screen name="SaudeSintomas" component={SaudeSintomasScreen} />
        <Stack.Screen name="HistoricoIntoxicacao" component={HistoricoIntoxicacaoScreen} />
        <Stack.Screen name="IndicadoresBoasPraticas" component={IndicadoresBoasPraticasScreen} />
        <Stack.Screen name="ObservacoesAcs" component={ObservacoesAcsScreen} />
        <Stack.Screen name="Resumo" component={ResumoScreen} />
        <Stack.Screen name="ResultadoAutomatico" component={ResultadoAutomaticoScreen} />
        <Stack.Screen name="EncaminhamentoUbs" component={EncaminhamentoUbsScreen} />
        <Stack.Screen name="Encerramento" component={EncerramentoScreen} />
        <Stack.Screen name="ConfirmacaoEnvio" component={ConfirmacaoEnvioScreen} />
        <Stack.Screen name="DadosAutomaticos" component={DadosAutomaticosScreen} />
      </Stack.Navigator>
    </CollectionProvider>
  );
}
