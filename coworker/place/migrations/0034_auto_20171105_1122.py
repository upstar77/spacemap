# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-05 11:22
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0033_auto_20171103_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meetingroom',
            name='mr_capacity',
            field=models.PositiveIntegerField(choices=[(2, '2 种族'), (3, '3 种族'), (4, '4 种族'), (5, '5 种族'), (6, '6 种族'), (7, '7 种族'), (8, '8 种族'), (9, '9 种族'), (10, '10 种族'), (11, '11 种族'), (12, '12 种族'), (13, '13 种族'), (14, '14 种族'), (15, '15 种族'), (16, '16 种族'), (17, '17 种族'), (18, '18 种族'), (19, '19 种族'), (20, '20 种族'), (21, '21 种族'), (22, '22 种族'), (23, '23 种族'), (24, '24 种族'), (25, '25 种族'), (26, '26 种族'), (27, '27 种族'), (28, '28 种族'), (29, '29 种族'), (30, '30 种族'), (31, '31 种族'), (32, '32 种族'), (33, '33 种族'), (34, '34 种族'), (35, '35 种族'), (36, '36 种族'), (37, '37 种族'), (38, '38 种族'), (39, '39 种族'), (40, '40 种族'), (41, '41 种族'), (42, '42 种族'), (43, '43 种族'), (44, '44 种族'), (45, '45 种族'), (46, '46 种族'), (47, '47 种族'), (48, '48 种族'), (49, '49 种族')], validators=[django.core.validators.MinValueValidator(2), django.core.validators.MaxValueValidator(50)]),
        ),
        migrations.AlterField(
            model_name='place',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='place.Category'),
        ),
        migrations.AlterField(
            model_name='place',
            name='hire_nm',
            field=models.BooleanField(default=False, verbose_name='Allow non members to organize big events at my maker cloud site?'),
        ),
        migrations.AlterField(
            model_name='place',
            name='max_people_capacity',
            field=models.PositiveIntegerField(choices=[(1, '1 种族'), (2, '2 种族'), (3, '3 种族'), (4, '4 种族'), (5, '5 种族'), (6, '6 种族'), (7, '7 种族'), (8, '8 种族'), (9, '9 种族'), (500, '500 种族'), (600, '600 种族'), (700, '700 种族'), (800, '800 种族'), (900, '900 种族'), (1000, '1000 种族'), (1100, '1100 种族'), (1200, '1200 种族'), (1300, '1300 种族'), (1400, '1400 种族')], default=50),
        ),
        migrations.AlterField(
            model_name='place',
            name='rent_nm',
            field=models.BooleanField(default=False, verbose_name='Allow non members to rent my conference room?'),
        ),
        migrations.AlterField(
            model_name='place',
            name='space_name',
            field=models.CharField(max_length=250, verbose_name='Name of the site SpacesMap'),
        ),
        migrations.AlterField(
            model_name='place',
            name='total_capacity',
            field=models.PositiveIntegerField(choices=[(1, '1 成员'), (2, '2 成员'), (3, '3 成员'), (4, '4 成员'), (5, '5 成员'), (6, '6 成员'), (7, '7 成员'), (8, '8 成员'), (9, '9 成员'), (10, '10 成员'), (11, '11 成员'), (12, '12 成员'), (13, '13 成员'), (14, '14 成员'), (15, '15 成员'), (16, '16 成员'), (17, '17 成员'), (18, '18 成员'), (19, '19 成员'), (20, '20 成员'), (21, '21 成员'), (22, '22 成员'), (23, '23 成员'), (24, '24 成员'), (25, '25 成员'), (26, '26 成员'), (27, '27 成员'), (28, '28 成员'), (29, '29 成员'), (30, '30 成员'), (31, '31 成员'), (32, '32 成员'), (33, '33 成员'), (34, '34 成员'), (35, '35 成员'), (36, '36 成员'), (37, '37 成员'), (38, '38 成员'), (39, '39 成员'), (40, '40 成员'), (41, '41 成员'), (42, '42 成员'), (43, '43 成员'), (44, '44 成员'), (45, '45 成员'), (46, '46 成员'), (47, '47 成员'), (48, '48 成员'), (49, '49 成员'), (50, '50 成员'), (51, '51 成员'), (52, '52 成员'), (53, '53 成员'), (54, '54 成员'), (55, '55 成员'), (56, '56 成员'), (57, '57 成员'), (58, '58 成员'), (59, '59 成员'), (60, '60 成员'), (61, '61 成员'), (62, '62 成员'), (63, '63 成员'), (64, '64 成员'), (65, '65 成员'), (66, '66 成员'), (67, '67 成员'), (68, '68 成员'), (69, '69 成员'), (70, '70 成员'), (71, '71 成员'), (72, '72 成员'), (73, '73 成员'), (74, '74 成员'), (75, '75 成员'), (76, '76 成员'), (77, '77 成员'), (78, '78 成员'), (79, '79 成员'), (80, '80 成员'), (81, '81 成员'), (82, '82 成员'), (83, '83 成员'), (84, '84 成员'), (85, '85 成员'), (86, '86 成员'), (87, '87 成员'), (88, '88 成员'), (89, '89 成员'), (90, '90 成员'), (91, '91 成员'), (92, '92 成员'), (93, '93 成员'), (94, '94 成员'), (95, '95 成员'), (96, '96 成员'), (97, '97 成员'), (98, '98 成员'), (99, '99 成员'), (100, '100 成员'), (101, '101 成员'), (102, '102 成员'), (103, '103 成员'), (104, '104 成员'), (105, '105 成员'), (106, '106 成员'), (107, '107 成员'), (108, '108 成员'), (109, '109 成员'), (110, '110 成员'), (111, '111 成员'), (112, '112 成员'), (113, '113 成员'), (114, '114 成员'), (115, '115 成员'), (116, '116 成员'), (117, '117 成员'), (118, '118 成员'), (119, '119 成员'), (120, '120 成员'), (121, '121 成员'), (122, '122 成员'), (123, '123 成员'), (124, '124 成员'), (125, '125 成员'), (126, '126 成员'), (127, '127 成员'), (128, '128 成员'), (129, '129 成员'), (130, '130 成员'), (131, '131 成员'), (132, '132 成员'), (133, '133 成员'), (134, '134 成员'), (135, '135 成员'), (136, '136 成员'), (137, '137 成员'), (138, '138 成员'), (139, '139 成员'), (140, '140 成员'), (141, '141 成员'), (142, '142 成员'), (143, '143 成员'), (144, '144 成员'), (145, '145 成员'), (146, '146 成员'), (147, '147 成员'), (148, '148 成员'), (149, '149 成员'), (150, '150 成员'), (151, '151 成员'), (152, '152 成员'), (153, '153 成员'), (154, '154 成员'), (155, '155 成员'), (156, '156 成员'), (157, '157 成员'), (158, '158 成员'), (159, '159 成员'), (160, '160 成员'), (161, '161 成员'), (162, '162 成员'), (163, '163 成员'), (164, '164 成员'), (165, '165 成员'), (166, '166 成员'), (167, '167 成员'), (168, '168 成员'), (169, '169 成员'), (170, '170 成员'), (171, '171 成员'), (172, '172 成员'), (173, '173 成员'), (174, '174 成员'), (175, '175 成员'), (176, '176 成员'), (177, '177 成员'), (178, '178 成员'), (179, '179 成员'), (180, '180 成员'), (181, '181 成员'), (182, '182 成员'), (183, '183 成员'), (184, '184 成员'), (185, '185 成员'), (186, '186 成员'), (187, '187 成员'), (188, '188 成员'), (189, '189 成员'), (190, '190 成员'), (191, '191 成员'), (192, '192 成员'), (193, '193 成员'), (194, '194 成员'), (195, '195 成员'), (196, '196 成员'), (197, '197 成员'), (198, '198 成员'), (199, '199 成员'), (200, '200 成员'), (201, '201 成员'), (202, '202 成员'), (203, '203 成员'), (204, '204 成员'), (205, '205 成员'), (206, '206 成员'), (207, '207 成员'), (208, '208 成员'), (209, '209 成员'), (210, '210 成员'), (211, '211 成员'), (212, '212 成员'), (213, '213 成员'), (214, '214 成员'), (215, '215 成员'), (216, '216 成员'), (217, '217 成员'), (218, '218 成员'), (219, '219 成员'), (220, '220 成员'), (221, '221 成员'), (222, '222 成员'), (223, '223 成员'), (224, '224 成员'), (225, '225 成员'), (226, '226 成员'), (227, '227 成员'), (228, '228 成员'), (229, '229 成员'), (230, '230 成员'), (231, '231 成员'), (232, '232 成员'), (233, '233 成员'), (234, '234 成员'), (235, '235 成员'), (236, '236 成员'), (237, '237 成员'), (238, '238 成员'), (239, '239 成员'), (240, '240 成员'), (241, '241 成员'), (242, '242 成员'), (243, '243 成员'), (244, '244 成员'), (245, '245 成员'), (246, '246 成员'), (247, '247 成员'), (248, '248 成员'), (249, '249 成员'), (250, '250 成员'), (251, '251 成员'), (252, '252 成员'), (253, '253 成员'), (254, '254 成员'), (255, '255 成员'), (256, '256 成员'), (257, '257 成员'), (258, '258 成员'), (259, '259 成员'), (260, '260 成员'), (261, '261 成员'), (262, '262 成员'), (263, '263 成员'), (264, '264 成员'), (265, '265 成员'), (266, '266 成员'), (267, '267 成员'), (268, '268 成员'), (269, '269 成员'), (270, '270 成员'), (271, '271 成员'), (272, '272 成员'), (273, '273 成员'), (274, '274 成员'), (275, '275 成员'), (276, '276 成员'), (277, '277 成员'), (278, '278 成员'), (279, '279 成员'), (280, '280 成员'), (281, '281 成员'), (282, '282 成员'), (283, '283 成员'), (284, '284 成员'), (285, '285 成员'), (286, '286 成员'), (287, '287 成员'), (288, '288 成员'), (289, '289 成员'), (290, '290 成员'), (291, '291 成员'), (292, '292 成员'), (293, '293 成员'), (294, '294 成员'), (295, '295 成员'), (296, '296 成员'), (297, '297 成员'), (298, '298 成员'), (299, '299 成员'), (300, '300 成员'), (301, '301 成员'), (302, '302 成员'), (303, '303 成员'), (304, '304 成员'), (305, '305 成员'), (306, '306 成员'), (307, '307 成员'), (308, '308 成员'), (309, '309 成员'), (310, '310 成员'), (311, '311 成员'), (312, '312 成员'), (313, '313 成员'), (314, '314 成员'), (315, '315 成员'), (316, '316 成员'), (317, '317 成员'), (318, '318 成员'), (319, '319 成员'), (320, '320 成员'), (321, '321 成员'), (322, '322 成员'), (323, '323 成员'), (324, '324 成员'), (325, '325 成员'), (326, '326 成员'), (327, '327 成员'), (328, '328 成员'), (329, '329 成员'), (330, '330 成员'), (331, '331 成员'), (332, '332 成员'), (333, '333 成员'), (334, '334 成员'), (335, '335 成员'), (336, '336 成员'), (337, '337 成员'), (338, '338 成员'), (339, '339 成员'), (340, '340 成员'), (341, '341 成员'), (342, '342 成员'), (343, '343 成员'), (344, '344 成员'), (345, '345 成员'), (346, '346 成员'), (347, '347 成员'), (348, '348 成员'), (349, '349 成员'), (350, '350 成员'), (351, '351 成员'), (352, '352 成员'), (353, '353 成员'), (354, '354 成员'), (355, '355 成员'), (356, '356 成员'), (357, '357 成员'), (358, '358 成员'), (359, '359 成员'), (360, '360 成员'), (361, '361 成员'), (362, '362 成员'), (363, '363 成员'), (364, '364 成员'), (365, '365 成员'), (366, '366 成员'), (367, '367 成员'), (368, '368 成员'), (369, '369 成员'), (370, '370 成员'), (371, '371 成员'), (372, '372 成员'), (373, '373 成员'), (374, '374 成员'), (375, '375 成员'), (376, '376 成员'), (377, '377 成员'), (378, '378 成员'), (379, '379 成员'), (380, '380 成员'), (381, '381 成员'), (382, '382 成员'), (383, '383 成员'), (384, '384 成员'), (385, '385 成员'), (386, '386 成员'), (387, '387 成员'), (388, '388 成员'), (389, '389 成员'), (390, '390 成员'), (391, '391 成员'), (392, '392 成员'), (393, '393 成员'), (394, '394 成员'), (395, '395 成员'), (396, '396 成员'), (397, '397 成员'), (398, '398 成员'), (399, '399 成员'), (400, '400 成员'), (401, '401 成员'), (402, '402 成员'), (403, '403 成员'), (404, '404 成员'), (405, '405 成员'), (406, '406 成员'), (407, '407 成员'), (408, '408 成员'), (409, '409 成员'), (410, '410 成员'), (411, '411 成员'), (412, '412 成员'), (413, '413 成员'), (414, '414 成员'), (415, '415 成员'), (416, '416 成员'), (417, '417 成员'), (418, '418 成员'), (419, '419 成员'), (420, '420 成员'), (421, '421 成员'), (422, '422 成员'), (423, '423 成员'), (424, '424 成员'), (425, '425 成员'), (426, '426 成员'), (427, '427 成员'), (428, '428 成员'), (429, '429 成员'), (430, '430 成员'), (431, '431 成员'), (432, '432 成员'), (433, '433 成员'), (434, '434 成员'), (435, '435 成员'), (436, '436 成员'), (437, '437 成员'), (438, '438 成员'), (439, '439 成员'), (440, '440 成员'), (441, '441 成员'), (442, '442 成员'), (443, '443 成员'), (444, '444 成员'), (445, '445 成员'), (446, '446 成员'), (447, '447 成员'), (448, '448 成员'), (449, '449 成员'), (450, '450 成员'), (451, '451 成员'), (452, '452 成员'), (453, '453 成员'), (454, '454 成员'), (455, '455 成员'), (456, '456 成员'), (457, '457 成员'), (458, '458 成员'), (459, '459 成员'), (460, '460 成员'), (461, '461 成员'), (462, '462 成员'), (463, '463 成员'), (464, '464 成员'), (465, '465 成员'), (466, '466 成员'), (467, '467 成员'), (468, '468 成员'), (469, '469 成员'), (470, '470 成员'), (471, '471 成员'), (472, '472 成员'), (473, '473 成员'), (474, '474 成员'), (475, '475 成员'), (476, '476 成员'), (477, '477 成员'), (478, '478 成员'), (479, '479 成员'), (480, '480 成员'), (481, '481 成员'), (482, '482 成员'), (483, '483 成员'), (484, '484 成员'), (485, '485 成员'), (486, '486 成员'), (487, '487 成员'), (488, '488 成员'), (489, '489 成员'), (490, '490 成员'), (491, '491 成员'), (492, '492 成员'), (493, '493 成员'), (494, '494 成员'), (495, '495 成员'), (496, '496 成员'), (497, '497 成员'), (498, '498 成员'), (499, '499 成员'), (500, '500 成员'), (600, '600 成员'), (700, '700 成员'), (800, '800 成员'), (900, '900 成员'), (1000, '1000 成员'), (1100, '1100 成员'), (1200, '1200 成员'), (1300, '1300 成员'), (1400, '1400 成员')], validators=[django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AlterField(
            model_name='place',
            name='user_type',
            field=models.CharField(choices=[('ot', 'Official team'), ('cm', 'New member'), ('pm', 'Old member')], default='ot', max_length=2),
        ),
    ]