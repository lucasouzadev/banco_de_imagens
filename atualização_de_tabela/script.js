$(document).ready(function() {
    // Quando o formulário for submetido
    $('#tarefa-form').on('submit', function(e) {
        // Previne o comportamento padrão do formulário
        e.preventDefault();
        
        // Obtém o valor do input
        const tarefaTexto = $('#tarefa-input').val().trim();
        
        // Verifica se o texto não está vazio
        if (tarefaTexto) {
            // Cria um novo item de lista com o texto da tarefa
            const novoItem = $('<li></li>').text(tarefaTexto);
            
            // Adiciona o novo item à lista
            $('#lista-tarefas').append(novoItem);
            
            // Limpa o campo de input
            $('#tarefa-input').val('').focus();
        }
    });
    
    // Delegação de evento para marcar/desmarcar tarefas como concluídas
    // Isso permite que o evento funcione em elementos adicionados dinamicamente
    $('#lista-tarefas').on('click', 'li', function() {
        // Alterna a classe 'completa' no elemento clicado
        $(this).toggleClass('completa');
    });
}); 