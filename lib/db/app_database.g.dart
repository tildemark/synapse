// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_database.dart';

// ignore_for_file: type=lint
class $PacksTable extends Packs with TableInfo<$PacksTable, Pack> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $PacksTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
    'id',
    aliasedName,
    false,
    hasAutoIncrement: true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'PRIMARY KEY AUTOINCREMENT',
    ),
  );
  static const VerificationMeta _packIdMeta = const VerificationMeta('packId');
  @override
  late final GeneratedColumn<String> packId = GeneratedColumn<String>(
    'pack_id',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
    defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'),
  );
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
    'name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _subjectMeta = const VerificationMeta(
    'subject',
  );
  @override
  late final GeneratedColumn<String> subject = GeneratedColumn<String>(
    'subject',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _iconNameMeta = const VerificationMeta(
    'iconName',
  );
  @override
  late final GeneratedColumn<String> iconName = GeneratedColumn<String>(
    'icon_name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
    defaultValue: const Constant('science'),
  );
  static const VerificationMeta _colorMeta = const VerificationMeta('color');
  @override
  late final GeneratedColumn<String> color = GeneratedColumn<String>(
    'color',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
    defaultValue: const Constant('#6C63FF'),
  );
  static const VerificationMeta _versionMeta = const VerificationMeta(
    'version',
  );
  @override
  late final GeneratedColumn<int> version = GeneratedColumn<int>(
    'version',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(1),
  );
  static const VerificationMeta _questionCountMeta = const VerificationMeta(
    'questionCount',
  );
  @override
  late final GeneratedColumn<int> questionCount = GeneratedColumn<int>(
    'question_count',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(0),
  );
  static const VerificationMeta _installedAtMeta = const VerificationMeta(
    'installedAt',
  );
  @override
  late final GeneratedColumn<DateTime> installedAt = GeneratedColumn<DateTime>(
    'installed_at',
    aliasedName,
    false,
    type: DriftSqlType.dateTime,
    requiredDuringInsert: false,
    defaultValue: currentDateAndTime,
  );
  @override
  List<GeneratedColumn> get $columns => [
    id,
    packId,
    name,
    subject,
    iconName,
    color,
    version,
    questionCount,
    installedAt,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'packs';
  @override
  VerificationContext validateIntegrity(
    Insertable<Pack> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('pack_id')) {
      context.handle(
        _packIdMeta,
        packId.isAcceptableOrUnknown(data['pack_id']!, _packIdMeta),
      );
    } else if (isInserting) {
      context.missing(_packIdMeta);
    }
    if (data.containsKey('name')) {
      context.handle(
        _nameMeta,
        name.isAcceptableOrUnknown(data['name']!, _nameMeta),
      );
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('subject')) {
      context.handle(
        _subjectMeta,
        subject.isAcceptableOrUnknown(data['subject']!, _subjectMeta),
      );
    } else if (isInserting) {
      context.missing(_subjectMeta);
    }
    if (data.containsKey('icon_name')) {
      context.handle(
        _iconNameMeta,
        iconName.isAcceptableOrUnknown(data['icon_name']!, _iconNameMeta),
      );
    }
    if (data.containsKey('color')) {
      context.handle(
        _colorMeta,
        color.isAcceptableOrUnknown(data['color']!, _colorMeta),
      );
    }
    if (data.containsKey('version')) {
      context.handle(
        _versionMeta,
        version.isAcceptableOrUnknown(data['version']!, _versionMeta),
      );
    }
    if (data.containsKey('question_count')) {
      context.handle(
        _questionCountMeta,
        questionCount.isAcceptableOrUnknown(
          data['question_count']!,
          _questionCountMeta,
        ),
      );
    }
    if (data.containsKey('installed_at')) {
      context.handle(
        _installedAtMeta,
        installedAt.isAcceptableOrUnknown(
          data['installed_at']!,
          _installedAtMeta,
        ),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Pack map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return Pack(
      id: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id'],
      )!,
      packId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}pack_id'],
      )!,
      name: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}name'],
      )!,
      subject: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}subject'],
      )!,
      iconName: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}icon_name'],
      )!,
      color: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}color'],
      )!,
      version: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}version'],
      )!,
      questionCount: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}question_count'],
      )!,
      installedAt: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}installed_at'],
      )!,
    );
  }

  @override
  $PacksTable createAlias(String alias) {
    return $PacksTable(attachedDatabase, alias);
  }
}

class Pack extends DataClass implements Insertable<Pack> {
  final int id;
  final String packId;
  final String name;
  final String subject;
  final String iconName;
  final String color;
  final int version;
  final int questionCount;
  final DateTime installedAt;
  const Pack({
    required this.id,
    required this.packId,
    required this.name,
    required this.subject,
    required this.iconName,
    required this.color,
    required this.version,
    required this.questionCount,
    required this.installedAt,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['pack_id'] = Variable<String>(packId);
    map['name'] = Variable<String>(name);
    map['subject'] = Variable<String>(subject);
    map['icon_name'] = Variable<String>(iconName);
    map['color'] = Variable<String>(color);
    map['version'] = Variable<int>(version);
    map['question_count'] = Variable<int>(questionCount);
    map['installed_at'] = Variable<DateTime>(installedAt);
    return map;
  }

  PacksCompanion toCompanion(bool nullToAbsent) {
    return PacksCompanion(
      id: Value(id),
      packId: Value(packId),
      name: Value(name),
      subject: Value(subject),
      iconName: Value(iconName),
      color: Value(color),
      version: Value(version),
      questionCount: Value(questionCount),
      installedAt: Value(installedAt),
    );
  }

  factory Pack.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Pack(
      id: serializer.fromJson<int>(json['id']),
      packId: serializer.fromJson<String>(json['packId']),
      name: serializer.fromJson<String>(json['name']),
      subject: serializer.fromJson<String>(json['subject']),
      iconName: serializer.fromJson<String>(json['iconName']),
      color: serializer.fromJson<String>(json['color']),
      version: serializer.fromJson<int>(json['version']),
      questionCount: serializer.fromJson<int>(json['questionCount']),
      installedAt: serializer.fromJson<DateTime>(json['installedAt']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'packId': serializer.toJson<String>(packId),
      'name': serializer.toJson<String>(name),
      'subject': serializer.toJson<String>(subject),
      'iconName': serializer.toJson<String>(iconName),
      'color': serializer.toJson<String>(color),
      'version': serializer.toJson<int>(version),
      'questionCount': serializer.toJson<int>(questionCount),
      'installedAt': serializer.toJson<DateTime>(installedAt),
    };
  }

  Pack copyWith({
    int? id,
    String? packId,
    String? name,
    String? subject,
    String? iconName,
    String? color,
    int? version,
    int? questionCount,
    DateTime? installedAt,
  }) => Pack(
    id: id ?? this.id,
    packId: packId ?? this.packId,
    name: name ?? this.name,
    subject: subject ?? this.subject,
    iconName: iconName ?? this.iconName,
    color: color ?? this.color,
    version: version ?? this.version,
    questionCount: questionCount ?? this.questionCount,
    installedAt: installedAt ?? this.installedAt,
  );
  Pack copyWithCompanion(PacksCompanion data) {
    return Pack(
      id: data.id.present ? data.id.value : this.id,
      packId: data.packId.present ? data.packId.value : this.packId,
      name: data.name.present ? data.name.value : this.name,
      subject: data.subject.present ? data.subject.value : this.subject,
      iconName: data.iconName.present ? data.iconName.value : this.iconName,
      color: data.color.present ? data.color.value : this.color,
      version: data.version.present ? data.version.value : this.version,
      questionCount: data.questionCount.present
          ? data.questionCount.value
          : this.questionCount,
      installedAt: data.installedAt.present
          ? data.installedAt.value
          : this.installedAt,
    );
  }

  @override
  String toString() {
    return (StringBuffer('Pack(')
          ..write('id: $id, ')
          ..write('packId: $packId, ')
          ..write('name: $name, ')
          ..write('subject: $subject, ')
          ..write('iconName: $iconName, ')
          ..write('color: $color, ')
          ..write('version: $version, ')
          ..write('questionCount: $questionCount, ')
          ..write('installedAt: $installedAt')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    id,
    packId,
    name,
    subject,
    iconName,
    color,
    version,
    questionCount,
    installedAt,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Pack &&
          other.id == this.id &&
          other.packId == this.packId &&
          other.name == this.name &&
          other.subject == this.subject &&
          other.iconName == this.iconName &&
          other.color == this.color &&
          other.version == this.version &&
          other.questionCount == this.questionCount &&
          other.installedAt == this.installedAt);
}

class PacksCompanion extends UpdateCompanion<Pack> {
  final Value<int> id;
  final Value<String> packId;
  final Value<String> name;
  final Value<String> subject;
  final Value<String> iconName;
  final Value<String> color;
  final Value<int> version;
  final Value<int> questionCount;
  final Value<DateTime> installedAt;
  const PacksCompanion({
    this.id = const Value.absent(),
    this.packId = const Value.absent(),
    this.name = const Value.absent(),
    this.subject = const Value.absent(),
    this.iconName = const Value.absent(),
    this.color = const Value.absent(),
    this.version = const Value.absent(),
    this.questionCount = const Value.absent(),
    this.installedAt = const Value.absent(),
  });
  PacksCompanion.insert({
    this.id = const Value.absent(),
    required String packId,
    required String name,
    required String subject,
    this.iconName = const Value.absent(),
    this.color = const Value.absent(),
    this.version = const Value.absent(),
    this.questionCount = const Value.absent(),
    this.installedAt = const Value.absent(),
  }) : packId = Value(packId),
       name = Value(name),
       subject = Value(subject);
  static Insertable<Pack> custom({
    Expression<int>? id,
    Expression<String>? packId,
    Expression<String>? name,
    Expression<String>? subject,
    Expression<String>? iconName,
    Expression<String>? color,
    Expression<int>? version,
    Expression<int>? questionCount,
    Expression<DateTime>? installedAt,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (packId != null) 'pack_id': packId,
      if (name != null) 'name': name,
      if (subject != null) 'subject': subject,
      if (iconName != null) 'icon_name': iconName,
      if (color != null) 'color': color,
      if (version != null) 'version': version,
      if (questionCount != null) 'question_count': questionCount,
      if (installedAt != null) 'installed_at': installedAt,
    });
  }

  PacksCompanion copyWith({
    Value<int>? id,
    Value<String>? packId,
    Value<String>? name,
    Value<String>? subject,
    Value<String>? iconName,
    Value<String>? color,
    Value<int>? version,
    Value<int>? questionCount,
    Value<DateTime>? installedAt,
  }) {
    return PacksCompanion(
      id: id ?? this.id,
      packId: packId ?? this.packId,
      name: name ?? this.name,
      subject: subject ?? this.subject,
      iconName: iconName ?? this.iconName,
      color: color ?? this.color,
      version: version ?? this.version,
      questionCount: questionCount ?? this.questionCount,
      installedAt: installedAt ?? this.installedAt,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (packId.present) {
      map['pack_id'] = Variable<String>(packId.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (subject.present) {
      map['subject'] = Variable<String>(subject.value);
    }
    if (iconName.present) {
      map['icon_name'] = Variable<String>(iconName.value);
    }
    if (color.present) {
      map['color'] = Variable<String>(color.value);
    }
    if (version.present) {
      map['version'] = Variable<int>(version.value);
    }
    if (questionCount.present) {
      map['question_count'] = Variable<int>(questionCount.value);
    }
    if (installedAt.present) {
      map['installed_at'] = Variable<DateTime>(installedAt.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('PacksCompanion(')
          ..write('id: $id, ')
          ..write('packId: $packId, ')
          ..write('name: $name, ')
          ..write('subject: $subject, ')
          ..write('iconName: $iconName, ')
          ..write('color: $color, ')
          ..write('version: $version, ')
          ..write('questionCount: $questionCount, ')
          ..write('installedAt: $installedAt')
          ..write(')'))
        .toString();
  }
}

class $QuestionsTable extends Questions
    with TableInfo<$QuestionsTable, Question> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $QuestionsTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
    'id',
    aliasedName,
    false,
    hasAutoIncrement: true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'PRIMARY KEY AUTOINCREMENT',
    ),
  );
  static const VerificationMeta _packIdMeta = const VerificationMeta('packId');
  @override
  late final GeneratedColumn<String> packId = GeneratedColumn<String>(
    'pack_id',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _questionMeta = const VerificationMeta(
    'question',
  );
  @override
  late final GeneratedColumn<String> question = GeneratedColumn<String>(
    'question',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _choiceAMeta = const VerificationMeta(
    'choiceA',
  );
  @override
  late final GeneratedColumn<String> choiceA = GeneratedColumn<String>(
    'choice_a',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _choiceBMeta = const VerificationMeta(
    'choiceB',
  );
  @override
  late final GeneratedColumn<String> choiceB = GeneratedColumn<String>(
    'choice_b',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _choiceCMeta = const VerificationMeta(
    'choiceC',
  );
  @override
  late final GeneratedColumn<String> choiceC = GeneratedColumn<String>(
    'choice_c',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _choiceDMeta = const VerificationMeta(
    'choiceD',
  );
  @override
  late final GeneratedColumn<String> choiceD = GeneratedColumn<String>(
    'choice_d',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _correctAnswerMeta = const VerificationMeta(
    'correctAnswer',
  );
  @override
  late final GeneratedColumn<String> correctAnswer = GeneratedColumn<String>(
    'correct_answer',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _explanationMeta = const VerificationMeta(
    'explanation',
  );
  @override
  late final GeneratedColumn<String> explanation = GeneratedColumn<String>(
    'explanation',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _difficultyLevelMeta = const VerificationMeta(
    'difficultyLevel',
  );
  @override
  late final GeneratedColumn<int> difficultyLevel = GeneratedColumn<int>(
    'difficulty_level',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(1),
  );
  static const VerificationMeta _moduleNumberMeta = const VerificationMeta(
    'moduleNumber',
  );
  @override
  late final GeneratedColumn<int> moduleNumber = GeneratedColumn<int>(
    'module_number',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(1),
  );
  static const VerificationMeta _moduleNameMeta = const VerificationMeta(
    'moduleName',
  );
  @override
  late final GeneratedColumn<String> moduleName = GeneratedColumn<String>(
    'module_name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
    defaultValue: const Constant('General'),
  );
  @override
  List<GeneratedColumn> get $columns => [
    id,
    packId,
    question,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    correctAnswer,
    explanation,
    difficultyLevel,
    moduleNumber,
    moduleName,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'questions';
  @override
  VerificationContext validateIntegrity(
    Insertable<Question> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('pack_id')) {
      context.handle(
        _packIdMeta,
        packId.isAcceptableOrUnknown(data['pack_id']!, _packIdMeta),
      );
    } else if (isInserting) {
      context.missing(_packIdMeta);
    }
    if (data.containsKey('question')) {
      context.handle(
        _questionMeta,
        question.isAcceptableOrUnknown(data['question']!, _questionMeta),
      );
    } else if (isInserting) {
      context.missing(_questionMeta);
    }
    if (data.containsKey('choice_a')) {
      context.handle(
        _choiceAMeta,
        choiceA.isAcceptableOrUnknown(data['choice_a']!, _choiceAMeta),
      );
    } else if (isInserting) {
      context.missing(_choiceAMeta);
    }
    if (data.containsKey('choice_b')) {
      context.handle(
        _choiceBMeta,
        choiceB.isAcceptableOrUnknown(data['choice_b']!, _choiceBMeta),
      );
    } else if (isInserting) {
      context.missing(_choiceBMeta);
    }
    if (data.containsKey('choice_c')) {
      context.handle(
        _choiceCMeta,
        choiceC.isAcceptableOrUnknown(data['choice_c']!, _choiceCMeta),
      );
    } else if (isInserting) {
      context.missing(_choiceCMeta);
    }
    if (data.containsKey('choice_d')) {
      context.handle(
        _choiceDMeta,
        choiceD.isAcceptableOrUnknown(data['choice_d']!, _choiceDMeta),
      );
    } else if (isInserting) {
      context.missing(_choiceDMeta);
    }
    if (data.containsKey('correct_answer')) {
      context.handle(
        _correctAnswerMeta,
        correctAnswer.isAcceptableOrUnknown(
          data['correct_answer']!,
          _correctAnswerMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_correctAnswerMeta);
    }
    if (data.containsKey('explanation')) {
      context.handle(
        _explanationMeta,
        explanation.isAcceptableOrUnknown(
          data['explanation']!,
          _explanationMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_explanationMeta);
    }
    if (data.containsKey('difficulty_level')) {
      context.handle(
        _difficultyLevelMeta,
        difficultyLevel.isAcceptableOrUnknown(
          data['difficulty_level']!,
          _difficultyLevelMeta,
        ),
      );
    }
    if (data.containsKey('module_number')) {
      context.handle(
        _moduleNumberMeta,
        moduleNumber.isAcceptableOrUnknown(
          data['module_number']!,
          _moduleNumberMeta,
        ),
      );
    }
    if (data.containsKey('module_name')) {
      context.handle(
        _moduleNameMeta,
        moduleName.isAcceptableOrUnknown(data['module_name']!, _moduleNameMeta),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Question map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return Question(
      id: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id'],
      )!,
      packId: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}pack_id'],
      )!,
      question: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}question'],
      )!,
      choiceA: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}choice_a'],
      )!,
      choiceB: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}choice_b'],
      )!,
      choiceC: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}choice_c'],
      )!,
      choiceD: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}choice_d'],
      )!,
      correctAnswer: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}correct_answer'],
      )!,
      explanation: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}explanation'],
      )!,
      difficultyLevel: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}difficulty_level'],
      )!,
      moduleNumber: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}module_number'],
      )!,
      moduleName: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}module_name'],
      )!,
    );
  }

  @override
  $QuestionsTable createAlias(String alias) {
    return $QuestionsTable(attachedDatabase, alias);
  }
}

class Question extends DataClass implements Insertable<Question> {
  final int id;
  final String packId;
  final String question;
  final String choiceA;
  final String choiceB;
  final String choiceC;
  final String choiceD;
  final String correctAnswer;
  final String explanation;
  final int difficultyLevel;
  final int moduleNumber;
  final String moduleName;
  const Question({
    required this.id,
    required this.packId,
    required this.question,
    required this.choiceA,
    required this.choiceB,
    required this.choiceC,
    required this.choiceD,
    required this.correctAnswer,
    required this.explanation,
    required this.difficultyLevel,
    required this.moduleNumber,
    required this.moduleName,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['pack_id'] = Variable<String>(packId);
    map['question'] = Variable<String>(question);
    map['choice_a'] = Variable<String>(choiceA);
    map['choice_b'] = Variable<String>(choiceB);
    map['choice_c'] = Variable<String>(choiceC);
    map['choice_d'] = Variable<String>(choiceD);
    map['correct_answer'] = Variable<String>(correctAnswer);
    map['explanation'] = Variable<String>(explanation);
    map['difficulty_level'] = Variable<int>(difficultyLevel);
    map['module_number'] = Variable<int>(moduleNumber);
    map['module_name'] = Variable<String>(moduleName);
    return map;
  }

  QuestionsCompanion toCompanion(bool nullToAbsent) {
    return QuestionsCompanion(
      id: Value(id),
      packId: Value(packId),
      question: Value(question),
      choiceA: Value(choiceA),
      choiceB: Value(choiceB),
      choiceC: Value(choiceC),
      choiceD: Value(choiceD),
      correctAnswer: Value(correctAnswer),
      explanation: Value(explanation),
      difficultyLevel: Value(difficultyLevel),
      moduleNumber: Value(moduleNumber),
      moduleName: Value(moduleName),
    );
  }

  factory Question.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Question(
      id: serializer.fromJson<int>(json['id']),
      packId: serializer.fromJson<String>(json['packId']),
      question: serializer.fromJson<String>(json['question']),
      choiceA: serializer.fromJson<String>(json['choiceA']),
      choiceB: serializer.fromJson<String>(json['choiceB']),
      choiceC: serializer.fromJson<String>(json['choiceC']),
      choiceD: serializer.fromJson<String>(json['choiceD']),
      correctAnswer: serializer.fromJson<String>(json['correctAnswer']),
      explanation: serializer.fromJson<String>(json['explanation']),
      difficultyLevel: serializer.fromJson<int>(json['difficultyLevel']),
      moduleNumber: serializer.fromJson<int>(json['moduleNumber']),
      moduleName: serializer.fromJson<String>(json['moduleName']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'packId': serializer.toJson<String>(packId),
      'question': serializer.toJson<String>(question),
      'choiceA': serializer.toJson<String>(choiceA),
      'choiceB': serializer.toJson<String>(choiceB),
      'choiceC': serializer.toJson<String>(choiceC),
      'choiceD': serializer.toJson<String>(choiceD),
      'correctAnswer': serializer.toJson<String>(correctAnswer),
      'explanation': serializer.toJson<String>(explanation),
      'difficultyLevel': serializer.toJson<int>(difficultyLevel),
      'moduleNumber': serializer.toJson<int>(moduleNumber),
      'moduleName': serializer.toJson<String>(moduleName),
    };
  }

  Question copyWith({
    int? id,
    String? packId,
    String? question,
    String? choiceA,
    String? choiceB,
    String? choiceC,
    String? choiceD,
    String? correctAnswer,
    String? explanation,
    int? difficultyLevel,
    int? moduleNumber,
    String? moduleName,
  }) => Question(
    id: id ?? this.id,
    packId: packId ?? this.packId,
    question: question ?? this.question,
    choiceA: choiceA ?? this.choiceA,
    choiceB: choiceB ?? this.choiceB,
    choiceC: choiceC ?? this.choiceC,
    choiceD: choiceD ?? this.choiceD,
    correctAnswer: correctAnswer ?? this.correctAnswer,
    explanation: explanation ?? this.explanation,
    difficultyLevel: difficultyLevel ?? this.difficultyLevel,
    moduleNumber: moduleNumber ?? this.moduleNumber,
    moduleName: moduleName ?? this.moduleName,
  );
  Question copyWithCompanion(QuestionsCompanion data) {
    return Question(
      id: data.id.present ? data.id.value : this.id,
      packId: data.packId.present ? data.packId.value : this.packId,
      question: data.question.present ? data.question.value : this.question,
      choiceA: data.choiceA.present ? data.choiceA.value : this.choiceA,
      choiceB: data.choiceB.present ? data.choiceB.value : this.choiceB,
      choiceC: data.choiceC.present ? data.choiceC.value : this.choiceC,
      choiceD: data.choiceD.present ? data.choiceD.value : this.choiceD,
      correctAnswer: data.correctAnswer.present
          ? data.correctAnswer.value
          : this.correctAnswer,
      explanation: data.explanation.present
          ? data.explanation.value
          : this.explanation,
      difficultyLevel: data.difficultyLevel.present
          ? data.difficultyLevel.value
          : this.difficultyLevel,
      moduleNumber: data.moduleNumber.present
          ? data.moduleNumber.value
          : this.moduleNumber,
      moduleName: data.moduleName.present
          ? data.moduleName.value
          : this.moduleName,
    );
  }

  @override
  String toString() {
    return (StringBuffer('Question(')
          ..write('id: $id, ')
          ..write('packId: $packId, ')
          ..write('question: $question, ')
          ..write('choiceA: $choiceA, ')
          ..write('choiceB: $choiceB, ')
          ..write('choiceC: $choiceC, ')
          ..write('choiceD: $choiceD, ')
          ..write('correctAnswer: $correctAnswer, ')
          ..write('explanation: $explanation, ')
          ..write('difficultyLevel: $difficultyLevel, ')
          ..write('moduleNumber: $moduleNumber, ')
          ..write('moduleName: $moduleName')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    id,
    packId,
    question,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    correctAnswer,
    explanation,
    difficultyLevel,
    moduleNumber,
    moduleName,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Question &&
          other.id == this.id &&
          other.packId == this.packId &&
          other.question == this.question &&
          other.choiceA == this.choiceA &&
          other.choiceB == this.choiceB &&
          other.choiceC == this.choiceC &&
          other.choiceD == this.choiceD &&
          other.correctAnswer == this.correctAnswer &&
          other.explanation == this.explanation &&
          other.difficultyLevel == this.difficultyLevel &&
          other.moduleNumber == this.moduleNumber &&
          other.moduleName == this.moduleName);
}

class QuestionsCompanion extends UpdateCompanion<Question> {
  final Value<int> id;
  final Value<String> packId;
  final Value<String> question;
  final Value<String> choiceA;
  final Value<String> choiceB;
  final Value<String> choiceC;
  final Value<String> choiceD;
  final Value<String> correctAnswer;
  final Value<String> explanation;
  final Value<int> difficultyLevel;
  final Value<int> moduleNumber;
  final Value<String> moduleName;
  const QuestionsCompanion({
    this.id = const Value.absent(),
    this.packId = const Value.absent(),
    this.question = const Value.absent(),
    this.choiceA = const Value.absent(),
    this.choiceB = const Value.absent(),
    this.choiceC = const Value.absent(),
    this.choiceD = const Value.absent(),
    this.correctAnswer = const Value.absent(),
    this.explanation = const Value.absent(),
    this.difficultyLevel = const Value.absent(),
    this.moduleNumber = const Value.absent(),
    this.moduleName = const Value.absent(),
  });
  QuestionsCompanion.insert({
    this.id = const Value.absent(),
    required String packId,
    required String question,
    required String choiceA,
    required String choiceB,
    required String choiceC,
    required String choiceD,
    required String correctAnswer,
    required String explanation,
    this.difficultyLevel = const Value.absent(),
    this.moduleNumber = const Value.absent(),
    this.moduleName = const Value.absent(),
  }) : packId = Value(packId),
       question = Value(question),
       choiceA = Value(choiceA),
       choiceB = Value(choiceB),
       choiceC = Value(choiceC),
       choiceD = Value(choiceD),
       correctAnswer = Value(correctAnswer),
       explanation = Value(explanation);
  static Insertable<Question> custom({
    Expression<int>? id,
    Expression<String>? packId,
    Expression<String>? question,
    Expression<String>? choiceA,
    Expression<String>? choiceB,
    Expression<String>? choiceC,
    Expression<String>? choiceD,
    Expression<String>? correctAnswer,
    Expression<String>? explanation,
    Expression<int>? difficultyLevel,
    Expression<int>? moduleNumber,
    Expression<String>? moduleName,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (packId != null) 'pack_id': packId,
      if (question != null) 'question': question,
      if (choiceA != null) 'choice_a': choiceA,
      if (choiceB != null) 'choice_b': choiceB,
      if (choiceC != null) 'choice_c': choiceC,
      if (choiceD != null) 'choice_d': choiceD,
      if (correctAnswer != null) 'correct_answer': correctAnswer,
      if (explanation != null) 'explanation': explanation,
      if (difficultyLevel != null) 'difficulty_level': difficultyLevel,
      if (moduleNumber != null) 'module_number': moduleNumber,
      if (moduleName != null) 'module_name': moduleName,
    });
  }

  QuestionsCompanion copyWith({
    Value<int>? id,
    Value<String>? packId,
    Value<String>? question,
    Value<String>? choiceA,
    Value<String>? choiceB,
    Value<String>? choiceC,
    Value<String>? choiceD,
    Value<String>? correctAnswer,
    Value<String>? explanation,
    Value<int>? difficultyLevel,
    Value<int>? moduleNumber,
    Value<String>? moduleName,
  }) {
    return QuestionsCompanion(
      id: id ?? this.id,
      packId: packId ?? this.packId,
      question: question ?? this.question,
      choiceA: choiceA ?? this.choiceA,
      choiceB: choiceB ?? this.choiceB,
      choiceC: choiceC ?? this.choiceC,
      choiceD: choiceD ?? this.choiceD,
      correctAnswer: correctAnswer ?? this.correctAnswer,
      explanation: explanation ?? this.explanation,
      difficultyLevel: difficultyLevel ?? this.difficultyLevel,
      moduleNumber: moduleNumber ?? this.moduleNumber,
      moduleName: moduleName ?? this.moduleName,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (packId.present) {
      map['pack_id'] = Variable<String>(packId.value);
    }
    if (question.present) {
      map['question'] = Variable<String>(question.value);
    }
    if (choiceA.present) {
      map['choice_a'] = Variable<String>(choiceA.value);
    }
    if (choiceB.present) {
      map['choice_b'] = Variable<String>(choiceB.value);
    }
    if (choiceC.present) {
      map['choice_c'] = Variable<String>(choiceC.value);
    }
    if (choiceD.present) {
      map['choice_d'] = Variable<String>(choiceD.value);
    }
    if (correctAnswer.present) {
      map['correct_answer'] = Variable<String>(correctAnswer.value);
    }
    if (explanation.present) {
      map['explanation'] = Variable<String>(explanation.value);
    }
    if (difficultyLevel.present) {
      map['difficulty_level'] = Variable<int>(difficultyLevel.value);
    }
    if (moduleNumber.present) {
      map['module_number'] = Variable<int>(moduleNumber.value);
    }
    if (moduleName.present) {
      map['module_name'] = Variable<String>(moduleName.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('QuestionsCompanion(')
          ..write('id: $id, ')
          ..write('packId: $packId, ')
          ..write('question: $question, ')
          ..write('choiceA: $choiceA, ')
          ..write('choiceB: $choiceB, ')
          ..write('choiceC: $choiceC, ')
          ..write('choiceD: $choiceD, ')
          ..write('correctAnswer: $correctAnswer, ')
          ..write('explanation: $explanation, ')
          ..write('difficultyLevel: $difficultyLevel, ')
          ..write('moduleNumber: $moduleNumber, ')
          ..write('moduleName: $moduleName')
          ..write(')'))
        .toString();
  }
}

class $UserProgressTable extends UserProgress
    with TableInfo<$UserProgressTable, UserProgressData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $UserProgressTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
    'id',
    aliasedName,
    false,
    hasAutoIncrement: true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'PRIMARY KEY AUTOINCREMENT',
    ),
  );
  static const VerificationMeta _questionIdMeta = const VerificationMeta(
    'questionId',
  );
  @override
  late final GeneratedColumn<int> questionId = GeneratedColumn<int>(
    'question_id',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: true,
    defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'),
  );
  static const VerificationMeta _srsStageMeta = const VerificationMeta(
    'srsStage',
  );
  @override
  late final GeneratedColumn<int> srsStage = GeneratedColumn<int>(
    'srs_stage',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(0),
  );
  static const VerificationMeta _nextReviewTimeMeta = const VerificationMeta(
    'nextReviewTime',
  );
  @override
  late final GeneratedColumn<DateTime> nextReviewTime =
      GeneratedColumn<DateTime>(
        'next_review_time',
        aliasedName,
        true,
        type: DriftSqlType.dateTime,
        requiredDuringInsert: false,
      );
  static const VerificationMeta _mistakeCountMeta = const VerificationMeta(
    'mistakeCount',
  );
  @override
  late final GeneratedColumn<int> mistakeCount = GeneratedColumn<int>(
    'mistake_count',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(0),
  );
  static const VerificationMeta _isLessonCompletedMeta = const VerificationMeta(
    'isLessonCompleted',
  );
  @override
  late final GeneratedColumn<bool> isLessonCompleted = GeneratedColumn<bool>(
    'is_lesson_completed',
    aliasedName,
    false,
    type: DriftSqlType.bool,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'CHECK ("is_lesson_completed" IN (0, 1))',
    ),
    defaultValue: const Constant(false),
  );
  static const VerificationMeta _lastReviewedAtMeta = const VerificationMeta(
    'lastReviewedAt',
  );
  @override
  late final GeneratedColumn<DateTime> lastReviewedAt =
      GeneratedColumn<DateTime>(
        'last_reviewed_at',
        aliasedName,
        true,
        type: DriftSqlType.dateTime,
        requiredDuringInsert: false,
      );
  @override
  List<GeneratedColumn> get $columns => [
    id,
    questionId,
    srsStage,
    nextReviewTime,
    mistakeCount,
    isLessonCompleted,
    lastReviewedAt,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'user_progress';
  @override
  VerificationContext validateIntegrity(
    Insertable<UserProgressData> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('question_id')) {
      context.handle(
        _questionIdMeta,
        questionId.isAcceptableOrUnknown(data['question_id']!, _questionIdMeta),
      );
    } else if (isInserting) {
      context.missing(_questionIdMeta);
    }
    if (data.containsKey('srs_stage')) {
      context.handle(
        _srsStageMeta,
        srsStage.isAcceptableOrUnknown(data['srs_stage']!, _srsStageMeta),
      );
    }
    if (data.containsKey('next_review_time')) {
      context.handle(
        _nextReviewTimeMeta,
        nextReviewTime.isAcceptableOrUnknown(
          data['next_review_time']!,
          _nextReviewTimeMeta,
        ),
      );
    }
    if (data.containsKey('mistake_count')) {
      context.handle(
        _mistakeCountMeta,
        mistakeCount.isAcceptableOrUnknown(
          data['mistake_count']!,
          _mistakeCountMeta,
        ),
      );
    }
    if (data.containsKey('is_lesson_completed')) {
      context.handle(
        _isLessonCompletedMeta,
        isLessonCompleted.isAcceptableOrUnknown(
          data['is_lesson_completed']!,
          _isLessonCompletedMeta,
        ),
      );
    }
    if (data.containsKey('last_reviewed_at')) {
      context.handle(
        _lastReviewedAtMeta,
        lastReviewedAt.isAcceptableOrUnknown(
          data['last_reviewed_at']!,
          _lastReviewedAtMeta,
        ),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UserProgressData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UserProgressData(
      id: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id'],
      )!,
      questionId: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}question_id'],
      )!,
      srsStage: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}srs_stage'],
      )!,
      nextReviewTime: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}next_review_time'],
      ),
      mistakeCount: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}mistake_count'],
      )!,
      isLessonCompleted: attachedDatabase.typeMapping.read(
        DriftSqlType.bool,
        data['${effectivePrefix}is_lesson_completed'],
      )!,
      lastReviewedAt: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}last_reviewed_at'],
      ),
    );
  }

  @override
  $UserProgressTable createAlias(String alias) {
    return $UserProgressTable(attachedDatabase, alias);
  }
}

class UserProgressData extends DataClass
    implements Insertable<UserProgressData> {
  final int id;
  final int questionId;
  final int srsStage;
  final DateTime? nextReviewTime;
  final int mistakeCount;
  final bool isLessonCompleted;
  final DateTime? lastReviewedAt;
  const UserProgressData({
    required this.id,
    required this.questionId,
    required this.srsStage,
    this.nextReviewTime,
    required this.mistakeCount,
    required this.isLessonCompleted,
    this.lastReviewedAt,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['question_id'] = Variable<int>(questionId);
    map['srs_stage'] = Variable<int>(srsStage);
    if (!nullToAbsent || nextReviewTime != null) {
      map['next_review_time'] = Variable<DateTime>(nextReviewTime);
    }
    map['mistake_count'] = Variable<int>(mistakeCount);
    map['is_lesson_completed'] = Variable<bool>(isLessonCompleted);
    if (!nullToAbsent || lastReviewedAt != null) {
      map['last_reviewed_at'] = Variable<DateTime>(lastReviewedAt);
    }
    return map;
  }

  UserProgressCompanion toCompanion(bool nullToAbsent) {
    return UserProgressCompanion(
      id: Value(id),
      questionId: Value(questionId),
      srsStage: Value(srsStage),
      nextReviewTime: nextReviewTime == null && nullToAbsent
          ? const Value.absent()
          : Value(nextReviewTime),
      mistakeCount: Value(mistakeCount),
      isLessonCompleted: Value(isLessonCompleted),
      lastReviewedAt: lastReviewedAt == null && nullToAbsent
          ? const Value.absent()
          : Value(lastReviewedAt),
    );
  }

  factory UserProgressData.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UserProgressData(
      id: serializer.fromJson<int>(json['id']),
      questionId: serializer.fromJson<int>(json['questionId']),
      srsStage: serializer.fromJson<int>(json['srsStage']),
      nextReviewTime: serializer.fromJson<DateTime?>(json['nextReviewTime']),
      mistakeCount: serializer.fromJson<int>(json['mistakeCount']),
      isLessonCompleted: serializer.fromJson<bool>(json['isLessonCompleted']),
      lastReviewedAt: serializer.fromJson<DateTime?>(json['lastReviewedAt']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'questionId': serializer.toJson<int>(questionId),
      'srsStage': serializer.toJson<int>(srsStage),
      'nextReviewTime': serializer.toJson<DateTime?>(nextReviewTime),
      'mistakeCount': serializer.toJson<int>(mistakeCount),
      'isLessonCompleted': serializer.toJson<bool>(isLessonCompleted),
      'lastReviewedAt': serializer.toJson<DateTime?>(lastReviewedAt),
    };
  }

  UserProgressData copyWith({
    int? id,
    int? questionId,
    int? srsStage,
    Value<DateTime?> nextReviewTime = const Value.absent(),
    int? mistakeCount,
    bool? isLessonCompleted,
    Value<DateTime?> lastReviewedAt = const Value.absent(),
  }) => UserProgressData(
    id: id ?? this.id,
    questionId: questionId ?? this.questionId,
    srsStage: srsStage ?? this.srsStage,
    nextReviewTime: nextReviewTime.present
        ? nextReviewTime.value
        : this.nextReviewTime,
    mistakeCount: mistakeCount ?? this.mistakeCount,
    isLessonCompleted: isLessonCompleted ?? this.isLessonCompleted,
    lastReviewedAt: lastReviewedAt.present
        ? lastReviewedAt.value
        : this.lastReviewedAt,
  );
  UserProgressData copyWithCompanion(UserProgressCompanion data) {
    return UserProgressData(
      id: data.id.present ? data.id.value : this.id,
      questionId: data.questionId.present
          ? data.questionId.value
          : this.questionId,
      srsStage: data.srsStage.present ? data.srsStage.value : this.srsStage,
      nextReviewTime: data.nextReviewTime.present
          ? data.nextReviewTime.value
          : this.nextReviewTime,
      mistakeCount: data.mistakeCount.present
          ? data.mistakeCount.value
          : this.mistakeCount,
      isLessonCompleted: data.isLessonCompleted.present
          ? data.isLessonCompleted.value
          : this.isLessonCompleted,
      lastReviewedAt: data.lastReviewedAt.present
          ? data.lastReviewedAt.value
          : this.lastReviewedAt,
    );
  }

  @override
  String toString() {
    return (StringBuffer('UserProgressData(')
          ..write('id: $id, ')
          ..write('questionId: $questionId, ')
          ..write('srsStage: $srsStage, ')
          ..write('nextReviewTime: $nextReviewTime, ')
          ..write('mistakeCount: $mistakeCount, ')
          ..write('isLessonCompleted: $isLessonCompleted, ')
          ..write('lastReviewedAt: $lastReviewedAt')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    id,
    questionId,
    srsStage,
    nextReviewTime,
    mistakeCount,
    isLessonCompleted,
    lastReviewedAt,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UserProgressData &&
          other.id == this.id &&
          other.questionId == this.questionId &&
          other.srsStage == this.srsStage &&
          other.nextReviewTime == this.nextReviewTime &&
          other.mistakeCount == this.mistakeCount &&
          other.isLessonCompleted == this.isLessonCompleted &&
          other.lastReviewedAt == this.lastReviewedAt);
}

class UserProgressCompanion extends UpdateCompanion<UserProgressData> {
  final Value<int> id;
  final Value<int> questionId;
  final Value<int> srsStage;
  final Value<DateTime?> nextReviewTime;
  final Value<int> mistakeCount;
  final Value<bool> isLessonCompleted;
  final Value<DateTime?> lastReviewedAt;
  const UserProgressCompanion({
    this.id = const Value.absent(),
    this.questionId = const Value.absent(),
    this.srsStage = const Value.absent(),
    this.nextReviewTime = const Value.absent(),
    this.mistakeCount = const Value.absent(),
    this.isLessonCompleted = const Value.absent(),
    this.lastReviewedAt = const Value.absent(),
  });
  UserProgressCompanion.insert({
    this.id = const Value.absent(),
    required int questionId,
    this.srsStage = const Value.absent(),
    this.nextReviewTime = const Value.absent(),
    this.mistakeCount = const Value.absent(),
    this.isLessonCompleted = const Value.absent(),
    this.lastReviewedAt = const Value.absent(),
  }) : questionId = Value(questionId);
  static Insertable<UserProgressData> custom({
    Expression<int>? id,
    Expression<int>? questionId,
    Expression<int>? srsStage,
    Expression<DateTime>? nextReviewTime,
    Expression<int>? mistakeCount,
    Expression<bool>? isLessonCompleted,
    Expression<DateTime>? lastReviewedAt,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (questionId != null) 'question_id': questionId,
      if (srsStage != null) 'srs_stage': srsStage,
      if (nextReviewTime != null) 'next_review_time': nextReviewTime,
      if (mistakeCount != null) 'mistake_count': mistakeCount,
      if (isLessonCompleted != null) 'is_lesson_completed': isLessonCompleted,
      if (lastReviewedAt != null) 'last_reviewed_at': lastReviewedAt,
    });
  }

  UserProgressCompanion copyWith({
    Value<int>? id,
    Value<int>? questionId,
    Value<int>? srsStage,
    Value<DateTime?>? nextReviewTime,
    Value<int>? mistakeCount,
    Value<bool>? isLessonCompleted,
    Value<DateTime?>? lastReviewedAt,
  }) {
    return UserProgressCompanion(
      id: id ?? this.id,
      questionId: questionId ?? this.questionId,
      srsStage: srsStage ?? this.srsStage,
      nextReviewTime: nextReviewTime ?? this.nextReviewTime,
      mistakeCount: mistakeCount ?? this.mistakeCount,
      isLessonCompleted: isLessonCompleted ?? this.isLessonCompleted,
      lastReviewedAt: lastReviewedAt ?? this.lastReviewedAt,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (questionId.present) {
      map['question_id'] = Variable<int>(questionId.value);
    }
    if (srsStage.present) {
      map['srs_stage'] = Variable<int>(srsStage.value);
    }
    if (nextReviewTime.present) {
      map['next_review_time'] = Variable<DateTime>(nextReviewTime.value);
    }
    if (mistakeCount.present) {
      map['mistake_count'] = Variable<int>(mistakeCount.value);
    }
    if (isLessonCompleted.present) {
      map['is_lesson_completed'] = Variable<bool>(isLessonCompleted.value);
    }
    if (lastReviewedAt.present) {
      map['last_reviewed_at'] = Variable<DateTime>(lastReviewedAt.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UserProgressCompanion(')
          ..write('id: $id, ')
          ..write('questionId: $questionId, ')
          ..write('srsStage: $srsStage, ')
          ..write('nextReviewTime: $nextReviewTime, ')
          ..write('mistakeCount: $mistakeCount, ')
          ..write('isLessonCompleted: $isLessonCompleted, ')
          ..write('lastReviewedAt: $lastReviewedAt')
          ..write(')'))
        .toString();
  }
}

class $TagsTable extends Tags with TableInfo<$TagsTable, Tag> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $TagsTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
    'id',
    aliasedName,
    false,
    hasAutoIncrement: true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'PRIMARY KEY AUTOINCREMENT',
    ),
  );
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
    'name',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
    defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'),
  );
  @override
  List<GeneratedColumn> get $columns => [id, name];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'tags';
  @override
  VerificationContext validateIntegrity(
    Insertable<Tag> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
        _nameMeta,
        name.isAcceptableOrUnknown(data['name']!, _nameMeta),
      );
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Tag map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return Tag(
      id: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id'],
      )!,
      name: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}name'],
      )!,
    );
  }

  @override
  $TagsTable createAlias(String alias) {
    return $TagsTable(attachedDatabase, alias);
  }
}

class Tag extends DataClass implements Insertable<Tag> {
  final int id;
  final String name;
  const Tag({required this.id, required this.name});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['name'] = Variable<String>(name);
    return map;
  }

  TagsCompanion toCompanion(bool nullToAbsent) {
    return TagsCompanion(id: Value(id), name: Value(name));
  }

  factory Tag.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Tag(
      id: serializer.fromJson<int>(json['id']),
      name: serializer.fromJson<String>(json['name']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'name': serializer.toJson<String>(name),
    };
  }

  Tag copyWith({int? id, String? name}) =>
      Tag(id: id ?? this.id, name: name ?? this.name);
  Tag copyWithCompanion(TagsCompanion data) {
    return Tag(
      id: data.id.present ? data.id.value : this.id,
      name: data.name.present ? data.name.value : this.name,
    );
  }

  @override
  String toString() {
    return (StringBuffer('Tag(')
          ..write('id: $id, ')
          ..write('name: $name')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, name);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Tag && other.id == this.id && other.name == this.name);
}

class TagsCompanion extends UpdateCompanion<Tag> {
  final Value<int> id;
  final Value<String> name;
  const TagsCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
  });
  TagsCompanion.insert({this.id = const Value.absent(), required String name})
    : name = Value(name);
  static Insertable<Tag> custom({
    Expression<int>? id,
    Expression<String>? name,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
    });
  }

  TagsCompanion copyWith({Value<int>? id, Value<String>? name}) {
    return TagsCompanion(id: id ?? this.id, name: name ?? this.name);
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('TagsCompanion(')
          ..write('id: $id, ')
          ..write('name: $name')
          ..write(')'))
        .toString();
  }
}

class $QuestionTagsTable extends QuestionTags
    with TableInfo<$QuestionTagsTable, QuestionTag> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $QuestionTagsTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _questionIdMeta = const VerificationMeta(
    'questionId',
  );
  @override
  late final GeneratedColumn<int> questionId = GeneratedColumn<int>(
    'question_id',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _tagIdMeta = const VerificationMeta('tagId');
  @override
  late final GeneratedColumn<int> tagId = GeneratedColumn<int>(
    'tag_id',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: true,
  );
  @override
  List<GeneratedColumn> get $columns => [questionId, tagId];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'question_tags';
  @override
  VerificationContext validateIntegrity(
    Insertable<QuestionTag> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('question_id')) {
      context.handle(
        _questionIdMeta,
        questionId.isAcceptableOrUnknown(data['question_id']!, _questionIdMeta),
      );
    } else if (isInserting) {
      context.missing(_questionIdMeta);
    }
    if (data.containsKey('tag_id')) {
      context.handle(
        _tagIdMeta,
        tagId.isAcceptableOrUnknown(data['tag_id']!, _tagIdMeta),
      );
    } else if (isInserting) {
      context.missing(_tagIdMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {questionId, tagId};
  @override
  QuestionTag map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return QuestionTag(
      questionId: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}question_id'],
      )!,
      tagId: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}tag_id'],
      )!,
    );
  }

  @override
  $QuestionTagsTable createAlias(String alias) {
    return $QuestionTagsTable(attachedDatabase, alias);
  }
}

class QuestionTag extends DataClass implements Insertable<QuestionTag> {
  final int questionId;
  final int tagId;
  const QuestionTag({required this.questionId, required this.tagId});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['question_id'] = Variable<int>(questionId);
    map['tag_id'] = Variable<int>(tagId);
    return map;
  }

  QuestionTagsCompanion toCompanion(bool nullToAbsent) {
    return QuestionTagsCompanion(
      questionId: Value(questionId),
      tagId: Value(tagId),
    );
  }

  factory QuestionTag.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return QuestionTag(
      questionId: serializer.fromJson<int>(json['questionId']),
      tagId: serializer.fromJson<int>(json['tagId']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'questionId': serializer.toJson<int>(questionId),
      'tagId': serializer.toJson<int>(tagId),
    };
  }

  QuestionTag copyWith({int? questionId, int? tagId}) => QuestionTag(
    questionId: questionId ?? this.questionId,
    tagId: tagId ?? this.tagId,
  );
  QuestionTag copyWithCompanion(QuestionTagsCompanion data) {
    return QuestionTag(
      questionId: data.questionId.present
          ? data.questionId.value
          : this.questionId,
      tagId: data.tagId.present ? data.tagId.value : this.tagId,
    );
  }

  @override
  String toString() {
    return (StringBuffer('QuestionTag(')
          ..write('questionId: $questionId, ')
          ..write('tagId: $tagId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(questionId, tagId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is QuestionTag &&
          other.questionId == this.questionId &&
          other.tagId == this.tagId);
}

class QuestionTagsCompanion extends UpdateCompanion<QuestionTag> {
  final Value<int> questionId;
  final Value<int> tagId;
  final Value<int> rowid;
  const QuestionTagsCompanion({
    this.questionId = const Value.absent(),
    this.tagId = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  QuestionTagsCompanion.insert({
    required int questionId,
    required int tagId,
    this.rowid = const Value.absent(),
  }) : questionId = Value(questionId),
       tagId = Value(tagId);
  static Insertable<QuestionTag> custom({
    Expression<int>? questionId,
    Expression<int>? tagId,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (questionId != null) 'question_id': questionId,
      if (tagId != null) 'tag_id': tagId,
      if (rowid != null) 'rowid': rowid,
    });
  }

  QuestionTagsCompanion copyWith({
    Value<int>? questionId,
    Value<int>? tagId,
    Value<int>? rowid,
  }) {
    return QuestionTagsCompanion(
      questionId: questionId ?? this.questionId,
      tagId: tagId ?? this.tagId,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (questionId.present) {
      map['question_id'] = Variable<int>(questionId.value);
    }
    if (tagId.present) {
      map['tag_id'] = Variable<int>(tagId.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('QuestionTagsCompanion(')
          ..write('questionId: $questionId, ')
          ..write('tagId: $tagId, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

abstract class _$AppDatabase extends GeneratedDatabase {
  _$AppDatabase(QueryExecutor e) : super(e);
  $AppDatabaseManager get managers => $AppDatabaseManager(this);
  late final $PacksTable packs = $PacksTable(this);
  late final $QuestionsTable questions = $QuestionsTable(this);
  late final $UserProgressTable userProgress = $UserProgressTable(this);
  late final $TagsTable tags = $TagsTable(this);
  late final $QuestionTagsTable questionTags = $QuestionTagsTable(this);
  late final ProgressDao progressDao = ProgressDao(this as AppDatabase);
  late final PackDao packDao = PackDao(this as AppDatabase);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [
    packs,
    questions,
    userProgress,
    tags,
    questionTags,
  ];
}

typedef $$PacksTableCreateCompanionBuilder =
    PacksCompanion Function({
      Value<int> id,
      required String packId,
      required String name,
      required String subject,
      Value<String> iconName,
      Value<String> color,
      Value<int> version,
      Value<int> questionCount,
      Value<DateTime> installedAt,
    });
typedef $$PacksTableUpdateCompanionBuilder =
    PacksCompanion Function({
      Value<int> id,
      Value<String> packId,
      Value<String> name,
      Value<String> subject,
      Value<String> iconName,
      Value<String> color,
      Value<int> version,
      Value<int> questionCount,
      Value<DateTime> installedAt,
    });

class $$PacksTableFilterComposer extends Composer<_$AppDatabase, $PacksTable> {
  $$PacksTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get packId => $composableBuilder(
    column: $table.packId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get subject => $composableBuilder(
    column: $table.subject,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get iconName => $composableBuilder(
    column: $table.iconName,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get color => $composableBuilder(
    column: $table.color,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get version => $composableBuilder(
    column: $table.version,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get questionCount => $composableBuilder(
    column: $table.questionCount,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get installedAt => $composableBuilder(
    column: $table.installedAt,
    builder: (column) => ColumnFilters(column),
  );
}

class $$PacksTableOrderingComposer
    extends Composer<_$AppDatabase, $PacksTable> {
  $$PacksTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get packId => $composableBuilder(
    column: $table.packId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get subject => $composableBuilder(
    column: $table.subject,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get iconName => $composableBuilder(
    column: $table.iconName,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get color => $composableBuilder(
    column: $table.color,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get version => $composableBuilder(
    column: $table.version,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get questionCount => $composableBuilder(
    column: $table.questionCount,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get installedAt => $composableBuilder(
    column: $table.installedAt,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$PacksTableAnnotationComposer
    extends Composer<_$AppDatabase, $PacksTable> {
  $$PacksTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get id =>
      $composableBuilder(column: $table.id, builder: (column) => column);

  GeneratedColumn<String> get packId =>
      $composableBuilder(column: $table.packId, builder: (column) => column);

  GeneratedColumn<String> get name =>
      $composableBuilder(column: $table.name, builder: (column) => column);

  GeneratedColumn<String> get subject =>
      $composableBuilder(column: $table.subject, builder: (column) => column);

  GeneratedColumn<String> get iconName =>
      $composableBuilder(column: $table.iconName, builder: (column) => column);

  GeneratedColumn<String> get color =>
      $composableBuilder(column: $table.color, builder: (column) => column);

  GeneratedColumn<int> get version =>
      $composableBuilder(column: $table.version, builder: (column) => column);

  GeneratedColumn<int> get questionCount => $composableBuilder(
    column: $table.questionCount,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get installedAt => $composableBuilder(
    column: $table.installedAt,
    builder: (column) => column,
  );
}

class $$PacksTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $PacksTable,
          Pack,
          $$PacksTableFilterComposer,
          $$PacksTableOrderingComposer,
          $$PacksTableAnnotationComposer,
          $$PacksTableCreateCompanionBuilder,
          $$PacksTableUpdateCompanionBuilder,
          (Pack, BaseReferences<_$AppDatabase, $PacksTable, Pack>),
          Pack,
          PrefetchHooks Function()
        > {
  $$PacksTableTableManager(_$AppDatabase db, $PacksTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$PacksTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$PacksTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$PacksTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                Value<String> packId = const Value.absent(),
                Value<String> name = const Value.absent(),
                Value<String> subject = const Value.absent(),
                Value<String> iconName = const Value.absent(),
                Value<String> color = const Value.absent(),
                Value<int> version = const Value.absent(),
                Value<int> questionCount = const Value.absent(),
                Value<DateTime> installedAt = const Value.absent(),
              }) => PacksCompanion(
                id: id,
                packId: packId,
                name: name,
                subject: subject,
                iconName: iconName,
                color: color,
                version: version,
                questionCount: questionCount,
                installedAt: installedAt,
              ),
          createCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                required String packId,
                required String name,
                required String subject,
                Value<String> iconName = const Value.absent(),
                Value<String> color = const Value.absent(),
                Value<int> version = const Value.absent(),
                Value<int> questionCount = const Value.absent(),
                Value<DateTime> installedAt = const Value.absent(),
              }) => PacksCompanion.insert(
                id: id,
                packId: packId,
                name: name,
                subject: subject,
                iconName: iconName,
                color: color,
                version: version,
                questionCount: questionCount,
                installedAt: installedAt,
              ),
          withReferenceMapper: (p0) => p0
              .map((e) => (e.readTable(table), BaseReferences(db, table, e)))
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$PacksTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $PacksTable,
      Pack,
      $$PacksTableFilterComposer,
      $$PacksTableOrderingComposer,
      $$PacksTableAnnotationComposer,
      $$PacksTableCreateCompanionBuilder,
      $$PacksTableUpdateCompanionBuilder,
      (Pack, BaseReferences<_$AppDatabase, $PacksTable, Pack>),
      Pack,
      PrefetchHooks Function()
    >;
typedef $$QuestionsTableCreateCompanionBuilder =
    QuestionsCompanion Function({
      Value<int> id,
      required String packId,
      required String question,
      required String choiceA,
      required String choiceB,
      required String choiceC,
      required String choiceD,
      required String correctAnswer,
      required String explanation,
      Value<int> difficultyLevel,
      Value<int> moduleNumber,
      Value<String> moduleName,
    });
typedef $$QuestionsTableUpdateCompanionBuilder =
    QuestionsCompanion Function({
      Value<int> id,
      Value<String> packId,
      Value<String> question,
      Value<String> choiceA,
      Value<String> choiceB,
      Value<String> choiceC,
      Value<String> choiceD,
      Value<String> correctAnswer,
      Value<String> explanation,
      Value<int> difficultyLevel,
      Value<int> moduleNumber,
      Value<String> moduleName,
    });

class $$QuestionsTableFilterComposer
    extends Composer<_$AppDatabase, $QuestionsTable> {
  $$QuestionsTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get packId => $composableBuilder(
    column: $table.packId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get question => $composableBuilder(
    column: $table.question,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get choiceA => $composableBuilder(
    column: $table.choiceA,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get choiceB => $composableBuilder(
    column: $table.choiceB,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get choiceC => $composableBuilder(
    column: $table.choiceC,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get choiceD => $composableBuilder(
    column: $table.choiceD,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get correctAnswer => $composableBuilder(
    column: $table.correctAnswer,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get explanation => $composableBuilder(
    column: $table.explanation,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get difficultyLevel => $composableBuilder(
    column: $table.difficultyLevel,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get moduleNumber => $composableBuilder(
    column: $table.moduleNumber,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get moduleName => $composableBuilder(
    column: $table.moduleName,
    builder: (column) => ColumnFilters(column),
  );
}

class $$QuestionsTableOrderingComposer
    extends Composer<_$AppDatabase, $QuestionsTable> {
  $$QuestionsTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get packId => $composableBuilder(
    column: $table.packId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get question => $composableBuilder(
    column: $table.question,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get choiceA => $composableBuilder(
    column: $table.choiceA,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get choiceB => $composableBuilder(
    column: $table.choiceB,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get choiceC => $composableBuilder(
    column: $table.choiceC,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get choiceD => $composableBuilder(
    column: $table.choiceD,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get correctAnswer => $composableBuilder(
    column: $table.correctAnswer,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get explanation => $composableBuilder(
    column: $table.explanation,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get difficultyLevel => $composableBuilder(
    column: $table.difficultyLevel,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get moduleNumber => $composableBuilder(
    column: $table.moduleNumber,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get moduleName => $composableBuilder(
    column: $table.moduleName,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$QuestionsTableAnnotationComposer
    extends Composer<_$AppDatabase, $QuestionsTable> {
  $$QuestionsTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get id =>
      $composableBuilder(column: $table.id, builder: (column) => column);

  GeneratedColumn<String> get packId =>
      $composableBuilder(column: $table.packId, builder: (column) => column);

  GeneratedColumn<String> get question =>
      $composableBuilder(column: $table.question, builder: (column) => column);

  GeneratedColumn<String> get choiceA =>
      $composableBuilder(column: $table.choiceA, builder: (column) => column);

  GeneratedColumn<String> get choiceB =>
      $composableBuilder(column: $table.choiceB, builder: (column) => column);

  GeneratedColumn<String> get choiceC =>
      $composableBuilder(column: $table.choiceC, builder: (column) => column);

  GeneratedColumn<String> get choiceD =>
      $composableBuilder(column: $table.choiceD, builder: (column) => column);

  GeneratedColumn<String> get correctAnswer => $composableBuilder(
    column: $table.correctAnswer,
    builder: (column) => column,
  );

  GeneratedColumn<String> get explanation => $composableBuilder(
    column: $table.explanation,
    builder: (column) => column,
  );

  GeneratedColumn<int> get difficultyLevel => $composableBuilder(
    column: $table.difficultyLevel,
    builder: (column) => column,
  );

  GeneratedColumn<int> get moduleNumber => $composableBuilder(
    column: $table.moduleNumber,
    builder: (column) => column,
  );

  GeneratedColumn<String> get moduleName => $composableBuilder(
    column: $table.moduleName,
    builder: (column) => column,
  );
}

class $$QuestionsTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $QuestionsTable,
          Question,
          $$QuestionsTableFilterComposer,
          $$QuestionsTableOrderingComposer,
          $$QuestionsTableAnnotationComposer,
          $$QuestionsTableCreateCompanionBuilder,
          $$QuestionsTableUpdateCompanionBuilder,
          (Question, BaseReferences<_$AppDatabase, $QuestionsTable, Question>),
          Question,
          PrefetchHooks Function()
        > {
  $$QuestionsTableTableManager(_$AppDatabase db, $QuestionsTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$QuestionsTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$QuestionsTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$QuestionsTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                Value<String> packId = const Value.absent(),
                Value<String> question = const Value.absent(),
                Value<String> choiceA = const Value.absent(),
                Value<String> choiceB = const Value.absent(),
                Value<String> choiceC = const Value.absent(),
                Value<String> choiceD = const Value.absent(),
                Value<String> correctAnswer = const Value.absent(),
                Value<String> explanation = const Value.absent(),
                Value<int> difficultyLevel = const Value.absent(),
                Value<int> moduleNumber = const Value.absent(),
                Value<String> moduleName = const Value.absent(),
              }) => QuestionsCompanion(
                id: id,
                packId: packId,
                question: question,
                choiceA: choiceA,
                choiceB: choiceB,
                choiceC: choiceC,
                choiceD: choiceD,
                correctAnswer: correctAnswer,
                explanation: explanation,
                difficultyLevel: difficultyLevel,
                moduleNumber: moduleNumber,
                moduleName: moduleName,
              ),
          createCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                required String packId,
                required String question,
                required String choiceA,
                required String choiceB,
                required String choiceC,
                required String choiceD,
                required String correctAnswer,
                required String explanation,
                Value<int> difficultyLevel = const Value.absent(),
                Value<int> moduleNumber = const Value.absent(),
                Value<String> moduleName = const Value.absent(),
              }) => QuestionsCompanion.insert(
                id: id,
                packId: packId,
                question: question,
                choiceA: choiceA,
                choiceB: choiceB,
                choiceC: choiceC,
                choiceD: choiceD,
                correctAnswer: correctAnswer,
                explanation: explanation,
                difficultyLevel: difficultyLevel,
                moduleNumber: moduleNumber,
                moduleName: moduleName,
              ),
          withReferenceMapper: (p0) => p0
              .map((e) => (e.readTable(table), BaseReferences(db, table, e)))
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$QuestionsTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $QuestionsTable,
      Question,
      $$QuestionsTableFilterComposer,
      $$QuestionsTableOrderingComposer,
      $$QuestionsTableAnnotationComposer,
      $$QuestionsTableCreateCompanionBuilder,
      $$QuestionsTableUpdateCompanionBuilder,
      (Question, BaseReferences<_$AppDatabase, $QuestionsTable, Question>),
      Question,
      PrefetchHooks Function()
    >;
typedef $$UserProgressTableCreateCompanionBuilder =
    UserProgressCompanion Function({
      Value<int> id,
      required int questionId,
      Value<int> srsStage,
      Value<DateTime?> nextReviewTime,
      Value<int> mistakeCount,
      Value<bool> isLessonCompleted,
      Value<DateTime?> lastReviewedAt,
    });
typedef $$UserProgressTableUpdateCompanionBuilder =
    UserProgressCompanion Function({
      Value<int> id,
      Value<int> questionId,
      Value<int> srsStage,
      Value<DateTime?> nextReviewTime,
      Value<int> mistakeCount,
      Value<bool> isLessonCompleted,
      Value<DateTime?> lastReviewedAt,
    });

class $$UserProgressTableFilterComposer
    extends Composer<_$AppDatabase, $UserProgressTable> {
  $$UserProgressTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get srsStage => $composableBuilder(
    column: $table.srsStage,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get nextReviewTime => $composableBuilder(
    column: $table.nextReviewTime,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get mistakeCount => $composableBuilder(
    column: $table.mistakeCount,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<bool> get isLessonCompleted => $composableBuilder(
    column: $table.isLessonCompleted,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get lastReviewedAt => $composableBuilder(
    column: $table.lastReviewedAt,
    builder: (column) => ColumnFilters(column),
  );
}

class $$UserProgressTableOrderingComposer
    extends Composer<_$AppDatabase, $UserProgressTable> {
  $$UserProgressTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get srsStage => $composableBuilder(
    column: $table.srsStage,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get nextReviewTime => $composableBuilder(
    column: $table.nextReviewTime,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get mistakeCount => $composableBuilder(
    column: $table.mistakeCount,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<bool> get isLessonCompleted => $composableBuilder(
    column: $table.isLessonCompleted,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get lastReviewedAt => $composableBuilder(
    column: $table.lastReviewedAt,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$UserProgressTableAnnotationComposer
    extends Composer<_$AppDatabase, $UserProgressTable> {
  $$UserProgressTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get id =>
      $composableBuilder(column: $table.id, builder: (column) => column);

  GeneratedColumn<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => column,
  );

  GeneratedColumn<int> get srsStage =>
      $composableBuilder(column: $table.srsStage, builder: (column) => column);

  GeneratedColumn<DateTime> get nextReviewTime => $composableBuilder(
    column: $table.nextReviewTime,
    builder: (column) => column,
  );

  GeneratedColumn<int> get mistakeCount => $composableBuilder(
    column: $table.mistakeCount,
    builder: (column) => column,
  );

  GeneratedColumn<bool> get isLessonCompleted => $composableBuilder(
    column: $table.isLessonCompleted,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get lastReviewedAt => $composableBuilder(
    column: $table.lastReviewedAt,
    builder: (column) => column,
  );
}

class $$UserProgressTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $UserProgressTable,
          UserProgressData,
          $$UserProgressTableFilterComposer,
          $$UserProgressTableOrderingComposer,
          $$UserProgressTableAnnotationComposer,
          $$UserProgressTableCreateCompanionBuilder,
          $$UserProgressTableUpdateCompanionBuilder,
          (
            UserProgressData,
            BaseReferences<_$AppDatabase, $UserProgressTable, UserProgressData>,
          ),
          UserProgressData,
          PrefetchHooks Function()
        > {
  $$UserProgressTableTableManager(_$AppDatabase db, $UserProgressTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$UserProgressTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$UserProgressTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$UserProgressTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                Value<int> questionId = const Value.absent(),
                Value<int> srsStage = const Value.absent(),
                Value<DateTime?> nextReviewTime = const Value.absent(),
                Value<int> mistakeCount = const Value.absent(),
                Value<bool> isLessonCompleted = const Value.absent(),
                Value<DateTime?> lastReviewedAt = const Value.absent(),
              }) => UserProgressCompanion(
                id: id,
                questionId: questionId,
                srsStage: srsStage,
                nextReviewTime: nextReviewTime,
                mistakeCount: mistakeCount,
                isLessonCompleted: isLessonCompleted,
                lastReviewedAt: lastReviewedAt,
              ),
          createCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                required int questionId,
                Value<int> srsStage = const Value.absent(),
                Value<DateTime?> nextReviewTime = const Value.absent(),
                Value<int> mistakeCount = const Value.absent(),
                Value<bool> isLessonCompleted = const Value.absent(),
                Value<DateTime?> lastReviewedAt = const Value.absent(),
              }) => UserProgressCompanion.insert(
                id: id,
                questionId: questionId,
                srsStage: srsStage,
                nextReviewTime: nextReviewTime,
                mistakeCount: mistakeCount,
                isLessonCompleted: isLessonCompleted,
                lastReviewedAt: lastReviewedAt,
              ),
          withReferenceMapper: (p0) => p0
              .map((e) => (e.readTable(table), BaseReferences(db, table, e)))
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$UserProgressTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $UserProgressTable,
      UserProgressData,
      $$UserProgressTableFilterComposer,
      $$UserProgressTableOrderingComposer,
      $$UserProgressTableAnnotationComposer,
      $$UserProgressTableCreateCompanionBuilder,
      $$UserProgressTableUpdateCompanionBuilder,
      (
        UserProgressData,
        BaseReferences<_$AppDatabase, $UserProgressTable, UserProgressData>,
      ),
      UserProgressData,
      PrefetchHooks Function()
    >;
typedef $$TagsTableCreateCompanionBuilder =
    TagsCompanion Function({Value<int> id, required String name});
typedef $$TagsTableUpdateCompanionBuilder =
    TagsCompanion Function({Value<int> id, Value<String> name});

class $$TagsTableFilterComposer extends Composer<_$AppDatabase, $TagsTable> {
  $$TagsTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnFilters(column),
  );
}

class $$TagsTableOrderingComposer extends Composer<_$AppDatabase, $TagsTable> {
  $$TagsTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get id => $composableBuilder(
    column: $table.id,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get name => $composableBuilder(
    column: $table.name,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$TagsTableAnnotationComposer
    extends Composer<_$AppDatabase, $TagsTable> {
  $$TagsTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get id =>
      $composableBuilder(column: $table.id, builder: (column) => column);

  GeneratedColumn<String> get name =>
      $composableBuilder(column: $table.name, builder: (column) => column);
}

class $$TagsTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $TagsTable,
          Tag,
          $$TagsTableFilterComposer,
          $$TagsTableOrderingComposer,
          $$TagsTableAnnotationComposer,
          $$TagsTableCreateCompanionBuilder,
          $$TagsTableUpdateCompanionBuilder,
          (Tag, BaseReferences<_$AppDatabase, $TagsTable, Tag>),
          Tag,
          PrefetchHooks Function()
        > {
  $$TagsTableTableManager(_$AppDatabase db, $TagsTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$TagsTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$TagsTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$TagsTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> id = const Value.absent(),
                Value<String> name = const Value.absent(),
              }) => TagsCompanion(id: id, name: name),
          createCompanionCallback:
              ({Value<int> id = const Value.absent(), required String name}) =>
                  TagsCompanion.insert(id: id, name: name),
          withReferenceMapper: (p0) => p0
              .map((e) => (e.readTable(table), BaseReferences(db, table, e)))
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$TagsTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $TagsTable,
      Tag,
      $$TagsTableFilterComposer,
      $$TagsTableOrderingComposer,
      $$TagsTableAnnotationComposer,
      $$TagsTableCreateCompanionBuilder,
      $$TagsTableUpdateCompanionBuilder,
      (Tag, BaseReferences<_$AppDatabase, $TagsTable, Tag>),
      Tag,
      PrefetchHooks Function()
    >;
typedef $$QuestionTagsTableCreateCompanionBuilder =
    QuestionTagsCompanion Function({
      required int questionId,
      required int tagId,
      Value<int> rowid,
    });
typedef $$QuestionTagsTableUpdateCompanionBuilder =
    QuestionTagsCompanion Function({
      Value<int> questionId,
      Value<int> tagId,
      Value<int> rowid,
    });

class $$QuestionTagsTableFilterComposer
    extends Composer<_$AppDatabase, $QuestionTagsTable> {
  $$QuestionTagsTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get tagId => $composableBuilder(
    column: $table.tagId,
    builder: (column) => ColumnFilters(column),
  );
}

class $$QuestionTagsTableOrderingComposer
    extends Composer<_$AppDatabase, $QuestionTagsTable> {
  $$QuestionTagsTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get tagId => $composableBuilder(
    column: $table.tagId,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$QuestionTagsTableAnnotationComposer
    extends Composer<_$AppDatabase, $QuestionTagsTable> {
  $$QuestionTagsTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<int> get questionId => $composableBuilder(
    column: $table.questionId,
    builder: (column) => column,
  );

  GeneratedColumn<int> get tagId =>
      $composableBuilder(column: $table.tagId, builder: (column) => column);
}

class $$QuestionTagsTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $QuestionTagsTable,
          QuestionTag,
          $$QuestionTagsTableFilterComposer,
          $$QuestionTagsTableOrderingComposer,
          $$QuestionTagsTableAnnotationComposer,
          $$QuestionTagsTableCreateCompanionBuilder,
          $$QuestionTagsTableUpdateCompanionBuilder,
          (
            QuestionTag,
            BaseReferences<_$AppDatabase, $QuestionTagsTable, QuestionTag>,
          ),
          QuestionTag,
          PrefetchHooks Function()
        > {
  $$QuestionTagsTableTableManager(_$AppDatabase db, $QuestionTagsTable table)
    : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$QuestionTagsTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$QuestionTagsTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$QuestionTagsTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<int> questionId = const Value.absent(),
                Value<int> tagId = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => QuestionTagsCompanion(
                questionId: questionId,
                tagId: tagId,
                rowid: rowid,
              ),
          createCompanionCallback:
              ({
                required int questionId,
                required int tagId,
                Value<int> rowid = const Value.absent(),
              }) => QuestionTagsCompanion.insert(
                questionId: questionId,
                tagId: tagId,
                rowid: rowid,
              ),
          withReferenceMapper: (p0) => p0
              .map((e) => (e.readTable(table), BaseReferences(db, table, e)))
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$QuestionTagsTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $QuestionTagsTable,
      QuestionTag,
      $$QuestionTagsTableFilterComposer,
      $$QuestionTagsTableOrderingComposer,
      $$QuestionTagsTableAnnotationComposer,
      $$QuestionTagsTableCreateCompanionBuilder,
      $$QuestionTagsTableUpdateCompanionBuilder,
      (
        QuestionTag,
        BaseReferences<_$AppDatabase, $QuestionTagsTable, QuestionTag>,
      ),
      QuestionTag,
      PrefetchHooks Function()
    >;

class $AppDatabaseManager {
  final _$AppDatabase _db;
  $AppDatabaseManager(this._db);
  $$PacksTableTableManager get packs =>
      $$PacksTableTableManager(_db, _db.packs);
  $$QuestionsTableTableManager get questions =>
      $$QuestionsTableTableManager(_db, _db.questions);
  $$UserProgressTableTableManager get userProgress =>
      $$UserProgressTableTableManager(_db, _db.userProgress);
  $$TagsTableTableManager get tags => $$TagsTableTableManager(_db, _db.tags);
  $$QuestionTagsTableTableManager get questionTags =>
      $$QuestionTagsTableTableManager(_db, _db.questionTags);
}
