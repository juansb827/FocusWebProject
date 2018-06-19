Sequelize npm package it's excluded from the npm package due to the following:

The file sequelize/lib/data-types.js  was modified in the line line 384 (removed the Z), 
to avoid the following error:
Conversion failed when converting date and/or time from character string.



