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
        peso1:'Peso insuficiente',
        peso2:'Normopeso',
        peso3:'Sobrepeso grado I',
        peso4:'Sobrepeso grado II (preobesidad)',
        peso5:'Obesidad de tipo I',
        peso6:'Obesidad de tipo II',
        paso7:'Obesidad de tipo III (mórbida)',
        paso8:'Obesidad de tipo IV (extrema'
        
    }),
    images:Map({
        fuerza_Muscular:{url:require('../utils/img/ic_fuerza.jpg')},
        medidas_antropometricas:{url:require('../utils/img/ic_antropometricas.jpg')},
        test_Equilibrio:{url:require('../utils/img/ic_equilibrio.jpg')},
        test_flexibilidad:{url:require( '../utils/img/ic_flexibilidad.jpg')},
        test_velocidad:{url:require('../utils/img/ic_velocidad.jpg')},
    })
});
