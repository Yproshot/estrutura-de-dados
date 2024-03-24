/*
            4. Peça ao usuário para digitar idades de 10 pessoas. Exiba quantas pessoas são maior de idade (18 anos) e
            quantas são menores.
        */

            let maiores = 0;
            let menores = 0;
            let idades = [10, 12, 15, 18, 20, 25, 30, 35, 40, 45];
            
            for (let i = 0; i < idades.length; i++) {
                if (idades[i] >= 18) {
                    maiores++;
                } else {
                    menores++;
                }
            }
            
            console.log("São maiores de idade: " + maiores);
            console.log("São menores de idade: " + menores);
            