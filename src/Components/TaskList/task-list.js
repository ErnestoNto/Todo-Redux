import styled from "styled-components";

export const TaskContainer = styled.article`
    width: 90%;
    min-height: 200px;
    margin: 0 auto;
    max-width: 700px;
    padding: 20px;
    border-top: 1px solid #A663CC;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;
`

export const TaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #A663CC;
    padding: 8px;
    width: 90%;
    margin: 0 auto;
`

export const TaskContent = styled.p`
    font-size: 1.3rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 5px;
`