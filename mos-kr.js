$.ajax(
	"https://tools-static.wmflabs.org/meta/scripts/pathoschild.templatescript.js",
	{ dataType: "script", cache: !0 },
).then(function () {
	pathoschild.TemplateScript.add({
		name: "Infobox Korean fixes",
		category: "MOS:KO",
		forNamespaces: 0,
		tooltip: "Align with [[MOS:KO-AUTOROMAN]] and [[MOS:KO-LINKTEXT]]",
		script: function (editor) {
			editor
				.replace(/(?<ibox>{{Infobox Korean) name(?!\/auto)/i, "$<ibox>/auto")
				.replace(/\{\{Infobox Korean([^]*?)'''/i, function (editor) {
					return editor
						.replace(
							/(?<param>hangul|hangulborn|hangulstage|hangul1|hangul2|hangul3)(?<space1> *)=(?<space2> *)\{\{linktext\|(?<one>[가-힣 ]+)?\|?(?<two>[가-힣 ]+)?\|?(?<three>[가-힣 ]+)?\|?(?<four>[가-힣 ]+)?\|?(?<five>[가-힣 ]+)?\|?(?<six>[가-힣 ]+)?\|?(?<seven>[가-힣 ]+)?\|?(?<eight>[가-힣 ]+)?\|?(?<nine>[가-힣 ]+)?\|?(?<ten>[가-힣 ]+)?\|?\}\}/gi,
							"$<param>$<space1>=$<space2>$<one>$<two>$<three>$<four>$<five>$<six>$<seven>$<eight>$<nine>$<ten>",
						)
						.replace(
							/(?<param>hanja|hanjaborn|hanjastage|hanja1|hanja2|hanja3)(?<space1> *)=(?<space2> *)\{\{linktext\|(?<one>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<two>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<three>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<four>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<five>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<six>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<seven>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<eight>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<nine>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?(?<ten>[㐀-䶿一-鿿﨎-﨩𤨒 ]+)?\|?\}\}/gi,
							"$<param>$<space1>=$<space2>$<one>$<two>$<three>$<four>$<five>$<six>$<seven>$<eight>$<nine>$<ten>",
						)
						.replace(
							/(?<param>hangul|hangulborn|hangul1|hangul2|hangul3)(?<space1> *)=(?<space2> *)(?!\s*%)(?<name>[가-힣]{2,4})(?![가-힣])/gi,
							"$<param>$<space1>=$<space2>$<name>",
						)
						.replace(
							/\|(?<space1> *)(?<param>rr|rrborn|rrstage|rr1|rr2|rr3|mr|mrborn|mrstage|mr1|mr2|mr3|context)(?<space2> *)=(?<space3> *)[^|}]+(\s*\n?)/gi,
							"",
						)
						.replace(
							/\|(?<space1> *)title(?<space2> *)=(?<space3> *)(?<value>\[\[Korean name\]\]|Korean name)(\s*\n?)/g,
							"",
						);
				})
				.appendEditSummary(
					"Semi-[[User:Heurim/MOS:KO|scripted]] formatting as per [[MOS:KOREA]]",
				)
				.clickDiff();
		},
	});
});
