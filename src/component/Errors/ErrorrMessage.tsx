interface IProps {
Msg: string;
}

const ErrorrMessage = ({Msg}: IProps) => {
   return Msg ? <span className="block text-red-700 text-sm font-semibold">{Msg}</span> : null;
}

export default ErrorrMessage