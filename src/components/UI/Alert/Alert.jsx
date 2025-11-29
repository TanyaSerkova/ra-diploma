import PropTypes from 'prop-types';
import { CustomButton } from '../Buttons/CustomButton';

//вывод сообщения
export function Alert({ type, text, btnText, btnOnClick }) {
    const btnViev = !!btnText &&
        <CustomButton type='btn' classname='btn btn-outline-primary' onButtonClick={btnOnClick}>
            { btnText }
        </CustomButton>
    return (
        <div className="text-center">
            <div className={`alert text-center alert-${ type }`} role='alert'>
                { text }
            </div>
            { btnViev }
        </div>
    )
}

Alert.PropTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    btnText: PropTypes.string,
    btnOnClick: PropTypes.func,
}