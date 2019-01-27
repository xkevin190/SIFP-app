import { Map, List } from 'immutable';

export default Map({
    logout: Map({
        users: '',
        password:''
    }),
    pruebas:Map(),
    groupData:List(),
    testMessage: Map({
        recomendacion:`Consultar Nutricionista Realizar trabajos con pesasbajo supervisión de unexperto en Educación física.`,
        recomendacion2:`Mantener tu peso`,
        recomendacion3:`Consultar Nutricionista, Realizar ejercicio Aeróbico bajo supervisión de un experto en Educación Física de larga duración y de baja  intensidad, ejemplo caminar,  trotar, nadar, anda enbicicleta.`,
        recomendacion4:'Consultar a un medico',
        peso1:'Peso insuficiente',
        peso2:'Normopeso',
        peso3:'Sobrepeso grado I',
        peso4:'Sobrepeso grado II (preobesidad)',
        peso5:'Obesidad de tipo I',
        peso6:'Obesidad de tipo II',
        paso7:'Obesidad de tipo III (mórbida)',
        paso8:'Obesidad de tipo IV (extrema',
        ICC1:'Muy Bajo',
        ICC2:'Riesgo Cardiovascular Bajo',
        ICC3:'Riesgo Cardiovascular Alto',
        TA1:'optima',
        TA2:'Normal',
        TA3:'Hipertencion grado 1',
        TA4:'Hipertencion grado 2',
        TA5:'Hipertencion grado 3',
        TA6:'Hipertencion Sistolica Aisladaa',
        FC1:'Normal',
        FC2:'Braquicardia Sinusual',
        FC3: 'Taquicardia',
        FC4: 'Bradicardia por bloqueo auriculo-ventricular completo.',
        FR1:'Taquipnea',
        FR2:'Bradipnea',
    }),
    images:Map({
        test_fuerza:{url:require('../utils/img/ic_fuerza.jpg')},
        medidas_antropometricas:{url:require('../utils/img/ic_antropometricas.jpg')},
        test_equilibrio:{url:require('../utils/img/ic_equilibrio.jpg')},
        flexibilidad_articular:{url:require('../utils/img/ic_flexibilidad.jpg')},
        resitencia_muscular:{url:require('../utils/img/ic_velocidad.jpg')},
    })
});