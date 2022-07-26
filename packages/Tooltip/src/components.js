import styled from '@emotion/styled';

export const TooltipComponent = styled.div`
    background-color: #fff;
    padding: 10px 16px;
    border: 1px solid #dcdfe6;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    &:before {
        content: attr(data-content);
        max-width: 100%;
        box-sizing: border-box;
        position: absolute;
        background-color: #303133;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        padding: 10px;
        left: 50%;
        bottom:100%;
        transform: translate(-50%,-10px);
        display: none;
    }
    &:after{
        display: none;
        content: "";
        border: 6px solid transparent;
        border-top-color:#303133;
        position: absolute;
        left: 50%;
        bottom:100%;
        transform: translate(-50%,2px);
    }
    &:hover::after, &:hover::before {
        display: block;
    }
`;
