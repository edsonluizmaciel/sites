pc_positivo = [20,19,18,17,16,15,14,30,29,28,27,26,25];
pc_dell = [1,2,3,4,5,6,7,8,9,10,11,12,13,24,23,22,21,31,32,33,34,353,36,37,38,39,40];

def mistura(pc_dell,pc_positivo);
    random.shuffle(pc_dell)
    random.shuffle(pc_positivo)
    troca = zip (pc_dell,pc_positivo)
    return troca
delf imprimi(troca)

troca = misturas(pc_dell,pc_positivo)
print(troca)

