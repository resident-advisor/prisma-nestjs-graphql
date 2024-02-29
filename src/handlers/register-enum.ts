import JSON5 from 'json5';
import { EnumDeclarationStructure, StructureKind } from 'ts-morph';

import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { EventArguments, SchemaEnum } from '../types';

export function registerEnum(enumType: SchemaEnum, args: EventArguments) {
  const { getSourceFile, enums, config } = args;

  if (!config.emitBlocks.prismaEnums && !enums[enumType.name]) return;

  const dataModelEnum = enums[enumType.name];
  const model = args.models.get(enumType.name.replace('ScalarFieldEnum', ''));
  const sourceFile = getSourceFile({
    name: enumType.name,
    type: 'enum',
  });

  const importDeclarations = new ImportDeclarationMap();

  importDeclarations.set('registerEnumType', {
    namedImports: [{ name: 'registerEnumType' }],
    moduleSpecifier: '@nestjs/graphql',
  });

  const enumStructure: EnumDeclarationStructure = {
    kind: StructureKind.Enum,
    isExported: true,
    name: enumType.name,
    members: enumType.values.map(v => ({
      name: v,
      initializer: JSON.stringify(v),
    })),
  };

  const valuesMap = (dataModelEnum?.values
    || enumType.values.map((value) => ({ name: value, documentation: model?.fields.find((f) => f.name === value)?.documentation })))
    .reduce((valuesMap, value) => {
      if (value['documentation']) {
        valuesMap[value.name] = {
          description: value['documentation']
        };
      }

      return valuesMap;
    }, {});
  const description = dataModelEnum == undefined ? undefined : dataModelEnum.documentation;

  sourceFile.set({
    statements: [
      ...importDeclarations.toStatements(),
      enumStructure,
      '\n',
      `registerEnumType(${enumType.name}, { name: '${enumType.name}'${description ? `, description: ${JSON.stringify(description)}` : ''}${Object.keys(valuesMap).length > 0 ? `, valuesMap: ${JSON5.stringify(valuesMap, { space: ' ' })}` : ''} });`,
    ],
  });
}
