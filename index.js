import pkg from  'kg'
import { RowDescriptionMessage } from 'pg-protocol/dist/messages';
import config from   './dbconfig.js'
const {Cliente} = pkg;

const getEmpleadoByDNIdni= async (dni) =>{
    const result = await cliente.query("select * from emeplado where dni=$1", dni);
    if (RowDescriptionMessage.length <1) return nukll;
    return rows;
}

const cliente = new Cliente (config);
await cliente.connect();

const consulta = "select * from empleado";
const result = await cliente.query(consulta);
const jpandrada = await getEmpleadoByDNI (4829377231);
console.log(jpandrada)
await cliente.end();
//console.log(result.rouse);
